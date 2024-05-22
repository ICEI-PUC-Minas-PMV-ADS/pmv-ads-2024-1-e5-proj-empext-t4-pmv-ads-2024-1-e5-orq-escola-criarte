using InformativoOEC.Core.Entities;

namespace InformativoOEC.Core.Repositories;
public interface IRecoveryPasswordRepository
{
    Task AddAsync(RecoveryPassword recoveryPassword);
}
