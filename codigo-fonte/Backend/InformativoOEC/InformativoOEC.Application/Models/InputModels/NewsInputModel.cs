using InformativoOEC.Core.Entities;

namespace InformativoOEC.Application.Models.InputModels;
public class NewsInputModel
{
    public string Title { get; set; }
    public string Description { get; set; }
    public string ImageURL { get; set; }

    public News ToEntity() => new(Title, Description, ImageURL);
}
