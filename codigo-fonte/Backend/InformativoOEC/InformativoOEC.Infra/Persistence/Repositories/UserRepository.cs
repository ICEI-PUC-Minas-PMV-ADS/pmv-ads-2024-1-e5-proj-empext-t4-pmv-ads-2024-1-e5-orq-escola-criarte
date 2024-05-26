using InformativoOEC.Core.Entities;
using InformativoOEC.Core.Repositories;
using Microsoft.EntityFrameworkCore;

namespace InformativoOEC.Infra.Persistence.Repositories;
public class UserRepository : IUserRepository
{
    private readonly InformativoOECDbContext _context;
    public UserRepository(InformativoOECDbContext context)
    {
        _context = context;
    }
    public async Task AddAsync(User user)
    {
        await _context.Users.AddAsync(user);
        await _context.SaveChangesAsync();
    }

    public async Task<bool> ExistsUserWithEmail(string email, Guid id)
    {
        return await _context.Users.AnyAsync(u => u.Email.Equals(email) && u.Id != id);
    }

    public async Task<List<User>> GetAll()
    {
        return await _context.Users.ToListAsync();
    }

    public async Task<User> GetUserByEmail(string email)
    {
        User? user = await _context.Users.AsNoTracking().SingleOrDefaultAsync(u => u.Email == email);

        return user;
    }

    public async Task<User> GetUserByEmailAndPasswordAsync(string email, string passwordHash)
    {
        User? user = await _context.Users.AsNoTracking().SingleOrDefaultAsync(u => u.Email == email && u.Password == passwordHash);
        return user;
    }

    public async Task<User> GetUserById(Guid id)
    {
        User? user = await _context.Users.AsNoTracking().SingleOrDefaultAsync(u => u.Id == id);

        return user;
    }

    public void Update(User user)
    {
        _context.Users.Update(user);
        _context.SaveChanges();
    }
}
