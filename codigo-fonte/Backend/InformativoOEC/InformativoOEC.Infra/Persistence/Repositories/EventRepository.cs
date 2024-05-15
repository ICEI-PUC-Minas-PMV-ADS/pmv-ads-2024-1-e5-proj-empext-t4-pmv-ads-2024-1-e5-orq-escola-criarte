using InformativoOEC.Core.Entities;
using InformativoOEC.Core.Repositories;
using Microsoft.EntityFrameworkCore;

namespace InformativoOEC.Infra.Persistence.Repositories;
public class EventRepository : IEventRepository
{
    private readonly InformativoOECDbContext _context;
    public EventRepository(InformativoOECDbContext context)
    {
        _context = context;
    }
    public async Task AddAsync(Event @event)
    {
        await _context.AddAsync(@event);
        await _context.SaveChangesAsync();
    }

    public Task<Event> GetEventById(Guid id)
    {
        Task<Event?> @event = _context.Events.AsNoTracking().SingleOrDefaultAsync(e => e.Id == id);

        return @event;
    }
}
