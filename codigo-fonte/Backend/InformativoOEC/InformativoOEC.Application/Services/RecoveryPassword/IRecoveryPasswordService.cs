using InformativoOEC.Application.Models.InputModels;

namespace InformativoOEC.Application.Services.RecoveryPassword;
public interface IRecoveryPasswordService
{
    Task Create(RecoveryPasswordInputModel input);
}
