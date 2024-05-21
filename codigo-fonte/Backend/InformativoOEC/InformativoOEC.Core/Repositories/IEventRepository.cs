using InformativoOEC.Core.Entities;

namespace InformativoOEC.Core.Repositories;
public interface IEventRepository
{
    Task AddAsync(Event @event);
    Task<Event> GetEventById(Guid id);
}
