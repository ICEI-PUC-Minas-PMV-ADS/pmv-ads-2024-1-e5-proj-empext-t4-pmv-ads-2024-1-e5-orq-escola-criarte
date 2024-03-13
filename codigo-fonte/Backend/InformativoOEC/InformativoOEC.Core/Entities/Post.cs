using InformativoOEC.Core.ValueObjects;

namespace InformativoOEC.Core.Entities;
public class Post : BaseEntity
{
    protected Post() { }
    public Post(Content content, string image, DateTime date, Address address, string username)
    {
        Content = content;
        ImageURL = image;
        Date = date;
        Address = address;
        Username = username;
    }

    public Content Content { get; private set; }
    public string ImageURL { get; private set; }
    public DateTime Date { get; private set; }
    public Address Address { get; private set; }
    public string Username { get; private set; }
}
