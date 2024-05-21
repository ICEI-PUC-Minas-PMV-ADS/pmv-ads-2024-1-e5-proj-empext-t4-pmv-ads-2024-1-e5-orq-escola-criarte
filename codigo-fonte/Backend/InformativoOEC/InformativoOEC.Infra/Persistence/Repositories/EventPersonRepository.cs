using InformativoOEC.Core.Entities;
using InformativoOEC.Core.Enums;
using InformativoOEC.Core.Repositories;
using Microsoft.EntityFrameworkCore;

namespace InformativoOEC.Infra.Persistence.Repositories;
public class EventPersonRepository : IEventPersonRepository
{
    private readonly InformativoOECDbContext _context;
    public EventPersonRepository(InformativoOECDbContext context)
    {
        _context = context;
    }
    public async Task AddAsync(EventPerson eventPerson)
    {
        await _context.AddAsync(eventPerson);
        await _context.SaveChangesAsync();
    }

    public async Task<List<EventPerson>> GetEventPeople(Guid eventId, EventPersonEnum personType)
    {
        IQueryable<EventPerson> eventPeople = _context.EventPersons
            .Where(ep => ep.EventId == eventId);

        if (personType != EventPersonEnum.None)
        {
            eventPeople = eventPeople
                .Where(ep => ep.PersonType == personType);
        }

        return await eventPeople.ToListAsync();
    }
}
