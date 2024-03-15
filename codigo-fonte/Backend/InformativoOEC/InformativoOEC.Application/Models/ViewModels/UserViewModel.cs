namespace InformativoOEC.Application.Models.ViewModels;
public class UserViewModel
{
    public UserViewModel(string name, string email)
    {
        Name = name;
        Email = email;
    }

    public string Name { get; }
    public string Email { get; }
}
