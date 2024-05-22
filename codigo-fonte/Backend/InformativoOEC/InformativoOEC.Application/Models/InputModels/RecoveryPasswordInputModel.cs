using InformativoOEC.Core.Entities;

namespace InformativoOEC.Application.Models.InputModels;
public class RecoveryPasswordInputModel
{
    public string Email { get; set; }

    public RecoveryPassword ToEntity(long code) => new(Email, code);
}
