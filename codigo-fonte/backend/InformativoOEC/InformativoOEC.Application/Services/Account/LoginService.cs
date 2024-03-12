using InformativoOEC.Application.Models.InputModels;
using InformativoOEC.Application.Models.ViewModels;
using InformativoOEC.Application.Services.Authentication;
using InformativoOEC.Core.Exceptions;
using InformativoOEC.Core.Repositories;

namespace InformativoOEC.Application.Services.Account;
public class LoginService : ILoginService
{
    private readonly IAuthService _authService;
    private readonly IUserRepository _userRepository;
    public LoginService(IAuthService authService, IUserRepository userRepository)
    {
        _authService = authService;
        _userRepository = userRepository;
    }
    public async Task<LoginViewModel> Login(LoginInputModel model)
    {
        string passwordHash = _authService.ComputeSha256Hash(model.Password);

        Core.Entities.User user = await _userRepository.GetUserByEmailAndPasswordAsync(model.Email, passwordHash) ??
            throw new ValidationErrorsException("Nome de usuário e/ou senha inválido");

        string token = _authService.GenerateJwtToken(user);

        return new LoginViewModel { Token = token };
    }
}
