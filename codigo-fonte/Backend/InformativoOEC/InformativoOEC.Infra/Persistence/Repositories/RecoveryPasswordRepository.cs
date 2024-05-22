using InformativoOEC.Core.Entities;
using InformativoOEC.Core.Repositories;

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
}
