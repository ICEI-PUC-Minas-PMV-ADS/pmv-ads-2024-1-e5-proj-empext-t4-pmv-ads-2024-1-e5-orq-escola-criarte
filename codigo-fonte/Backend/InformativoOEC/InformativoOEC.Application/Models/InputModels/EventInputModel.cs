using InformativoOEC.Core.Entities;

namespace InformativoOEC.Application.Models.InputModels;
public class EventInputModel
{
    public EventInputModel(Guid postId)
    {
        PostId = postId;
    }

    public Guid PostId { get; set; }

    public Event ToEntity() => new(PostId);
}
