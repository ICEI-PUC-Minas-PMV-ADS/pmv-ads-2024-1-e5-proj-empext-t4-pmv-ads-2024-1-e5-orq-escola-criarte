using InformativoOEC.Core.Entities;
using InformativoOEC.Core.Repositories;

namespace InformativoOEC.Infra.Persistence.Repositories;
public class NewsRepository : INewsRepository
{
    private readonly InformativoOECDbContext _context;
    public NewsRepository(InformativoOECDbContext context)
    {
        _context = context;
    }
    public async Task AddAsync(News news)
    {
        await _context.AddAsync(news);
        await _context.SaveChangesAsync();
    }
}
