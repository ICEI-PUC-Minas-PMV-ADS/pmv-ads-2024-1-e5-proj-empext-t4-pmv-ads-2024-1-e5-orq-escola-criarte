using InformativoOEC.Application.Models.InputModels;
using InformativoOEC.Application.Models.ViewModels;

namespace InformativoOEC.Application.Services.News;
public interface INewsService
{
    Task<NewsViewModel> Create(NewsInputModel input);
    Task<List<NewsViewModel>> GetAll();
}
