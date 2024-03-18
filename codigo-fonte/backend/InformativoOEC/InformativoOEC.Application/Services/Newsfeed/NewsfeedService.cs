using InformativoOEC.Application.Models.ViewModels;
using InformativoOEC.Core.Repositories;

namespace InformativoOEC.Application.Services.Newsfeed;
public class NewsfeedService : INewsfeedService
{
    private readonly IPostRepository _postRepository;
    public NewsfeedService(IPostRepository postRepository)
    {
        _postRepository = postRepository;
    }
    public async Task<List<NewsfeedViewModel>> GetAll()
    {
        var newsfeeds = await _postRepository.GetAllAsync();

        var viewModels = newsfeeds.Select(n => new NewsfeedViewModel(n)).ToList();

        return viewModels;
    }
}
