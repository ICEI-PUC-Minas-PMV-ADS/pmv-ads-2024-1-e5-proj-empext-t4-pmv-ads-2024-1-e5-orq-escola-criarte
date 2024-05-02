using InformativoOEC.Application.Models.InputModels;
using InformativoOEC.Application.Models.ViewModels;

namespace InformativoOEC.Application.Services.Post;
public interface IPostService
{
    Task<PostViewModel> Create(PostInputModel model);
    Task Update(PostInputModel model, Guid id);
    Task<PostViewModel> GetById(Guid id);

}
