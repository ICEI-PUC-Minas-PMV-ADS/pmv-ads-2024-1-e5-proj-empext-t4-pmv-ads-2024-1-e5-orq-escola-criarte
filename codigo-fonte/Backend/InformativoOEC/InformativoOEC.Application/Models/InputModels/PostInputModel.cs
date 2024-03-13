using InformativoOEC.Core.ValueObjects;

namespace InformativoOEC.Application.Models.InputModels;
public class PostInputModel
{
    public Content Content { get; set; }
    public string ImageURL { get; set; }
    public DateTime Date { get; set; }
    public Address Address { get; set; }
    public string Username { get; set; }

    public Core.Entities.Post ToEntity() => new(Content, ImageURL, Date, Address, Username);
}
