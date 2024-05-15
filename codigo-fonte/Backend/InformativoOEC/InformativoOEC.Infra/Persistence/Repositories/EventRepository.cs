using InformativoOEC.Core.Entities;
using InformativoOEC.Core.Repositories;

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
}
