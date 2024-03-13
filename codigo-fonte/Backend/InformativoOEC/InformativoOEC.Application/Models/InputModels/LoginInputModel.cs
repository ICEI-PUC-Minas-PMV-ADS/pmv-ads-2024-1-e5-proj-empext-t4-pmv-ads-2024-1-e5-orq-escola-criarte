using InformativoOEC.Core.Entities;

namespace InformativoOEC.Application.Models.InputModels;
public class LoginInputModel
{
    public string Email { get; set; }
    public string Password { get; set; }

    public User ToEntity() => new(Email, Password);
}
