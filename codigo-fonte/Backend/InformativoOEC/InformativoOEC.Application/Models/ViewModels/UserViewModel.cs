namespace InformativoOEC.Application.Models.ViewModels;
public class UserViewModel
{
    public UserViewModel(string name, string email)
    {
        Name = name;
        Email = email;
    }

    public UserViewModel(Core.Entities.User user)
    {
        Id = user.Id;
        Name = user.Name;
        Email = user.Email;
    }

    public Guid Id { get; set; }
    public string Name { get; }
    public string Email { get; }
}
