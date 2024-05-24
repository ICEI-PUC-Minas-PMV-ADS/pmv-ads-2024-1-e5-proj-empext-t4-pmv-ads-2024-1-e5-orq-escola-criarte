using InformativoOEC.Core.Entities;
using InformativoOEC.Core.Repositories;
using Microsoft.EntityFrameworkCore;

namespace InformativoOEC.Infra.Persistence.Repositories;
public class RecoveryPasswordRepository : IRecoveryPasswordRepository
{
    private readonly InformativoOECDbContext _context;
    public RecoveryPasswordRepository(InformativoOECDbContext context)
    {
        _context = context;
    }
    public async Task AddAsync(RecoveryPassword recoveryPassword)
    {
        await _context.AddAsync(recoveryPassword);
        await _context.SaveChangesAsync();
    }

    public async Task<bool> GetCodeByEmail(string email, long code)
    {
        var isValid = await _context.RecoveryPasswords.AnyAsync(r => r.Email == email && r.Code == code);

        return isValid;
    }
}
