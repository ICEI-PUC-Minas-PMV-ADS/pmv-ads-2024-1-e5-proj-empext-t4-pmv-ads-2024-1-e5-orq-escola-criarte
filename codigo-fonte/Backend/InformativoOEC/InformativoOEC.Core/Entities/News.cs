namespace InformativoOEC.Core.Entities;
public class News : BaseEntity
{
    public News(string title, string description, string imageURL)
    {
        Title = title;
        Description = description;
        ImageURL = imageURL;
    }

    public string Title { get; private set; }
    public string Description { get; private set; }
    public string ImageURL { get; private set; }

    public void Update(string title, string description, string imageURL)
    {
        Title = title;
        Description = description;
        ImageURL = imageURL;
    }
}
