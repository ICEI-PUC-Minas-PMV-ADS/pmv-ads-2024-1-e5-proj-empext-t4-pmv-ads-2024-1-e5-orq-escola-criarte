using InformativoOEC.Application.Models.ViewModels;

namespace InformativoOEC.Application.Services.Newsfeed;
public interface INewsfeedService
{
    Task<List<NewsfeedViewModel>> GetAll();
}
