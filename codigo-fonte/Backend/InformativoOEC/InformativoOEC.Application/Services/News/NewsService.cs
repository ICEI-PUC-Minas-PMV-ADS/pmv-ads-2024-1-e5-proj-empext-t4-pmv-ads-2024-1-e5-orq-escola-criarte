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

        await ControlNewsHandler();

        return new NewsViewModel(news.Id);
    }

    private async Task ControlNewsHandler()
    {
        var newsList = await _repository.GetAllAsync();
        string? limit = Environment.GetEnvironmentVariable("limit");

        if (newsList.Count >= Convert.ToInt32(limit))
        {
            var lastNews = newsList.Select(n => n.Id).LastOrDefault();
            await _repository.Delete(lastNews);
        }
    }

    public async Task Update(NewsInputModel input, Guid id)
    {
        Validate(input);

        Core.Entities.News news = await _repository.GetByIdAsync(id);

        news.Update(input.Title, input.Description, input.ImageURL);

        _repository.Update(news);
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
        List<Core.Entities.News> news = await _repository.GetAllAsync() ??
            throw new ValidationErrorsException("Não existem posts na base de dados");

        List<NewsViewModel> viewModels = news.Select(n =>  new NewsViewModel(n)).ToList();

        return viewModels;
    }

    public async Task<NewsViewModel> GetById(Guid id)
    {
        Core.Entities.News? news = await _repository.GetByIdAsync(id) ??
            throw new ValidationErrorsException("Não existe um post com o id informado");

        NewsViewModel viewModel = new(news);

        return viewModel;
    }

    public async Task DeleteById(Guid id)
    {
        await _repository.Delete(id);
    }
}
