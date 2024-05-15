using InformativoOEC.Core.Enums;

namespace InformativoOEC.Core.Entities;
public class EventPerson : BaseEntity
{
    public EventPerson(string userName, string email, EventPersonEnum personType, Guid eventId)
    {
        UserName = userName;
        Email = email;
        PersonType = personType;
        EventId = eventId;
    }

    public string UserName { get; private set; }
    public string Email { get; private set; }
    public EventPersonEnum PersonType { get; private set; }

    public Guid EventId { get; set; }
    //public virtual Event Event { get; set; }
}
