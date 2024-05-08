using InformativoOEC.Core.ValueObjects;

namespace InformativoOEC.Application.Models.ViewModels;
public class NewsfeedViewModel
{
    public NewsfeedViewModel(Core.Entities.Post post)
    {
        Id = post.Id;
        Content = post.Content;
        ImageURL = post.ImageURL;
        Date = post.Date;
        Address = post.Address;
        Username = post.Username;
    }

    public Guid Id { get; set; }
    public Content Content { get; set; }
    public string ImageURL { get; set; }
    public DateTime Date { get; set; }
    public Address Address { get; set; }
    public string Username { get; set; }
}
