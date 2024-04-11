using InformativoOEC.Application.Models.InputModels;
using InformativoOEC.Application.Models.ViewModels;

namespace InformativoOEC.Application.Services.User;
public interface IUserService
{
    Task<Guid> AddAsync(UserInputModel model);
    Task Update(UserInputModel model, Guid id);

    Task<UserViewModel> GetById(Guid id);
    Task<List<UserViewModel>> GetAll();
}
