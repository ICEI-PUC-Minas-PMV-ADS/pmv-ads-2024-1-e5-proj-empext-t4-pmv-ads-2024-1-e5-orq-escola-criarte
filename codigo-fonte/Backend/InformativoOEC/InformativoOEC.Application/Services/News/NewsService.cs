using InformativoOEC.Application.Models.InputModels;
using InformativoOEC.Application.Models.ViewModels;
using InformativoOEC.Core.Exceptions;
using InformativoOEC.Core.Repositories;

namespace InformativoOEC.Application.Services.News;
public class NewsService : INewsService
{
    private readonly INewsRepository _repository;
    public NewsService(INewsRepository repository)
    {
        _repository = repository;
    }
    public async Task<NewsViewModel> Create(NewsInputModel input)
    {
        Validate(input);

        Core.Entities.News news = input.ToEntity();

        await _repository.AddAsync(news);

        return new NewsViewModel(news.Id);
    }

    private static void Validate(NewsInputModel input)
    {
        var validator = new NewsValidation();
        var result = validator.Validate(input);

        if (!result.IsValid)
        {
            var errorMessages = result.Errors.Select(err => err.ErrorMessage).ToList();
            throw new ValidationErrorsException(errorMessages);
        }
    }

    public async Task<List<NewsViewModel>> GetAll()
    {
        List<Core.Entities.News> news = await _repository.GetAllAsync();

        List<NewsViewModel> viewModels = news.Select(n =>  new NewsViewModel(n)).ToList();

        return viewModels;
    }
}
