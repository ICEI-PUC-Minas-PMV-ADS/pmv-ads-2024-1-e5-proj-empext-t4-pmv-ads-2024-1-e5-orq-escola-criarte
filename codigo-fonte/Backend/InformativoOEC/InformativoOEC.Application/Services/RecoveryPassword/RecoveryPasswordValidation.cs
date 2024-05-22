using FluentValidation;
using InformativoOEC.Application.Models.InputModels;

namespace InformativoOEC.Application.Services.RecoveryPassword;
public class RecoveryPasswordValidation : AbstractValidator<RecoveryPasswordInputModel>
{
    public RecoveryPasswordValidation()
    {
        RuleFor(r => r.Email)
            .NotNull()
            .NotEmpty()
            .EmailAddress()
            .WithMessage("Endereço de e-mail inválido");
    }
}
