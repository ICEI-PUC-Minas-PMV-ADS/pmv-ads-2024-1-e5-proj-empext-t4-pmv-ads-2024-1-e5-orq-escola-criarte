using InformativoOEC.Core.Entities;

namespace InformativoOEC.Application.Models.ViewModels;
public class NewsViewModel
{
    public NewsViewModel(News news)
    {
        Id = news.Id;
        Title = news.Title;
        Description = news.Description;
        ImageURL = news.ImageURL;
        PostDateTime = news.CreatedAt;
    }

    public NewsViewModel(Guid id)
    {
        Id = id;
    }

    public Guid Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public string ImageURL { get; set; }
    public DateTime? PostDateTime { get; set; }
}
