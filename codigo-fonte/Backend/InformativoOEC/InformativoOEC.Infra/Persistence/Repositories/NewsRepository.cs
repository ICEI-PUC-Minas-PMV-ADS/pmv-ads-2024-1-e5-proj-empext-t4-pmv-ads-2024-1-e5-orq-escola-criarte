using InformativoOEC.Core.Entities;
using InformativoOEC.Core.Repositories;
using Microsoft.EntityFrameworkCore;

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

    public async Task<List<News>> GetAllAsync()
    {
        return await _context.News.AsNoTracking().ToListAsync();
    }

    public async Task<News> GetByIdAsync(Guid id)
    {
        News? news = await _context.News.AsNoTracking().SingleOrDefaultAsync(n => n.Id == id);

        return news;
    }
}
