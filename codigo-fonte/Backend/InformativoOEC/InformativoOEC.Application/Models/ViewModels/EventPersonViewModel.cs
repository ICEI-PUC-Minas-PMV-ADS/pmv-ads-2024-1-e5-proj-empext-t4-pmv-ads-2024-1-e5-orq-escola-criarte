using InformativoOEC.Core.Entities;
using InformativoOEC.Core.Enums;

namespace InformativoOEC.Application.Models.ViewModels;
public class EventPersonViewModel
{
    public EventPersonViewModel(int peopleCount, List<EventPersonModel> eventPeople)
    {
        PeopleCount = peopleCount;
        EventPeople = eventPeople;
    }

    public int PeopleCount { get; set; }
    public List<EventPersonModel> EventPeople { get; set; }
}

public class EventPersonModel
{
    public EventPersonModel(EventPerson eventPerson)
    {
        UserName = eventPerson.UserName;
        Email = eventPerson.Email;
        PersonType = eventPerson.PersonType;
        EventId = eventPerson.EventId;
    }

    public string UserName { get; set; }
    public string Email { get; set; }
    public EventPersonEnum PersonType { get; set; }
    public Guid EventId { get; set; }
}
