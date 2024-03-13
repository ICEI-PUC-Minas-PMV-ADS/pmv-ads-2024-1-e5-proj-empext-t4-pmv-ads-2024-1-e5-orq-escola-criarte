using InformativoOEC.Core.Entities;
using InformativoOEC.Core.Repositories;

namespace InformativoOEC.Infra.Persistence.Repositories;
public class PostRepository : IPostRepository
{
    private readonly InformativoOECDbContext _context;
    public PostRepository(InformativoOECDbContext context)
    {
        _context = context;
    }
    public async Task AddAsync(Post post)
    {
        await _context.AddAsync(post);
        await _context.SaveChangesAsync();
    }
}
