using InformativoOEC.Application.Models.InputModels;
using InformativoOEC.Application.Models.ViewModels;
using InformativoOEC.Application.Services.Authentication;
using InformativoOEC.Core.Exceptions;
using InformativoOEC.Core.Repositories;

namespace InformativoOEC.Application.Services.User;
public class UserService : IUserService
{
    private readonly IUserRepository _userRepository;
    private readonly IAuthService _authService;
    public UserService(IUserRepository userRepository, IAuthService authService)
    {
        _userRepository = userRepository;
        _authService = authService;
    }
    public async Task<Guid> AddAsync(UserInputModel model)
    {
        Validate(model);
        await ExistsUserWithEmail(model.Email);

        string passwordHash = _authService.ComputeSha256Hash(model.Password);

        var user = model.ToEntity(passwordHash);

        await _userRepository.AddAsync(user);

        return user.Id;
    }

    public async Task Update(UserInputModel model, Guid id)
    {
        Validate(model);
        await ExistsUserWithEmail(model.Email);

        string passwordHash = _authService.ComputeSha256Hash(model.Password);

        Core.Entities.User user = await _userRepository.GetUserById(id) ??
            throw new ValidationErrorsException("Usuário não existe");

        user.Update(model.Email, passwordHash);

        _userRepository.Update(user);   
    }

    public async Task<List<UserViewModel>> GetAll()
    {
        List<Core.Entities.User> users = await _userRepository.GetAll() ??
            throw new ValidationErrorsException("Nao existem usuários cadastrados");

        List<UserViewModel> viewModels = users.Select(u => new UserViewModel(u)).ToList();

        return viewModels;
    }

    public async Task<UserViewModel> GetById(Guid id)
    {
        Core.Entities.User user = await _userRepository.GetUserById(id) ??
            throw new ValidationErrorsException("Usuário não existe");

        UserViewModel viewModel = new(user.Name, user.Email);

        return viewModel;
    }

    private static void Validate(UserInputModel model)
    {
        var validator = new UserValidator();
        var result = validator.Validate(model);

        if (!result.IsValid)
        {
            var errorMessages = result.Errors.Select(error => error.ErrorMessage).ToList();
            throw new ValidationErrorsException(errorMessages);
        }
    }

    private async Task ExistsUserWithEmail(string email)
    {
        bool existisUserWithEmail = await _userRepository.ExistsUserWithEmail(email);
        if (existisUserWithEmail) 
        {
            throw new ValidationErrorsException("E-mail já cadastrado");
        }
    }
}
