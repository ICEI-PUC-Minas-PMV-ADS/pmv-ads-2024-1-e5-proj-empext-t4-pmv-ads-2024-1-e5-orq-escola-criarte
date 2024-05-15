using InformativoOEC.Core.Entities;
using InformativoOEC.Core.Repositories;

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
}
