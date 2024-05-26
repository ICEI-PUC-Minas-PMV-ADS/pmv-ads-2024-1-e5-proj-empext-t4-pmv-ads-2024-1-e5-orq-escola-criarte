using FluentValidation;
using System.Text.RegularExpressions;

namespace InformativoOEC.Application.Services.User;
public class PasswordValidator : AbstractValidator<string>
{
    public PasswordValidator(string password)
    {
        RuleFor(x => password)
        .Must(ValidPassword)
        .WithMessage("Senha deve conter pelo menos 8 caracteres, um número, uma letra maiúscula, uma minúscula, e um caractere especial");
    }

    private static bool ValidPassword(string password)
    {
        var regex = new Regex(@"^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!*@#$%^&+=]).*$");

        return regex.IsMatch(password);
    }
}
