using InformativoOEC.Core.ValueObjects;
using System.Reflection.Metadata;

namespace InformativoOEC.Core.Entities;
public class Post : BaseEntity
{
    protected Post() { }
    public Post(Content content, byte[] image, DateTime date, Address address, string username)
    {
        Content = content;
        ImageURL = image;
        Date = date;
        Address = address;
        Username = username;
    }

    public Content Content { get; private set; }
    public byte[] ImageURL { get; private set; }
    public DateTime Date { get; private set; }
    public Address Address { get; private set; }
    public string Username { get; private set; }

    public void Update(Content content, byte[] imageURL, DateTime date, Address address, string userName)
    {
        Content = content;
        ImageURL = imageURL;
        Date =date;
        Address = address;
        Username = userName;
    }
}
