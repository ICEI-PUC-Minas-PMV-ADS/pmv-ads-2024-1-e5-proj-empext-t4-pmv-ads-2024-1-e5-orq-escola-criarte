using InformativoOEC.Application.Models.InputModels;
using InformativoOEC.Application.Models.ViewModels;
using System.Security.Claims;

namespace InformativoOEC.Application.Services.Account;
public interface ILoginService
{
    Task<LoginViewModel> Login(LoginInputModel model);
}
