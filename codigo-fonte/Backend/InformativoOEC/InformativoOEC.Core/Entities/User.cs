using InformativoOEC.Core.Enums;
using System.Xml.Linq;

namespace InformativoOEC.Core.Entities;
public class User : BaseEntity
{
    public User(string name, string password, string email, RoleEnum role)
    {
        Name = name;
        Password = password;
        Email = email;
        Role = role;
    }

    public User(string password, string email)
    {
        Password = password;
        Email = email;
    }

    public string Name { get; private set; }
    public string Password { get; private set; }
    public string Email { get; private set; }
    public RoleEnum Role { get; private set; }

    public void Update(string email, string password)
    {
        Email = email;
        Password = password;
        UpdatedAt = DateTime.Now;
    }
}
