using InformativoOEC.Core.Entities;
using InformativoOEC.Core.Enums;

namespace InformativoOEC.Core.Repositories;
public interface IEventPersonRepository
{
    Task AddAsync(EventPerson eventPerson);
    Task<List<EventPerson>> GetEventPeople(Guid eventId, EventPersonEnum personType);
}
