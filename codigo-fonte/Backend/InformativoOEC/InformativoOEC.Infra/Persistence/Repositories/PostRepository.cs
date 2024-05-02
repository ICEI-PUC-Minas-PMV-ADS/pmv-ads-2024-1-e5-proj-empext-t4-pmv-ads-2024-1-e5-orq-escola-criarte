using InformativoOEC.Core.Entities;
using InformativoOEC.Core.Repositories;
using Microsoft.EntityFrameworkCore;

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

    public async Task<List<Post>> GetAllAsync()
    {
        return await _context.Posts.AsNoTracking().ToListAsync();
    }

    public async Task<Post> GetByIdAsync(Guid id)
    {
        Post? post =  await _context.Posts
            .AsNoTracking()
            .SingleOrDefaultAsync(p => p.Id == id);

        return post;
    }

    public void Update(Post post)
    {
        _context.Update(post);
        _context.SaveChanges();
    }
}
