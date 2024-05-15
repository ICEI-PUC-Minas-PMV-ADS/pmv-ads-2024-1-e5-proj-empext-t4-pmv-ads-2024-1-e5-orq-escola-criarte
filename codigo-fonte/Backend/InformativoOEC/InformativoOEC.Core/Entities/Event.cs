namespace InformativoOEC.Core.Entities;
public class Event : BaseEntity
{
    public Event(Guid postId)
    {
        PostId = postId;
    }

    public Event() { }
    public Guid PostId { get; private set; }

    //public virtual Post Post { get; set; }
    //public virtual ICollection<EventPerson> EventPersons { get; set; }
}
