using InformativoOEC.Core.Entities;
using InformativoOEC.Core.Enums;

namespace InformativoOEC.Application.Models.InputModels;
public class UserInputModel
{
    public string Name { get; set; }
    public string Password { get; set; }
    public string Email { get; set; }
    public RoleEnum Role { get; set; }

    public User ToEntity(string passwordHash) => new(Name, passwordHash, Email, Role);
}
