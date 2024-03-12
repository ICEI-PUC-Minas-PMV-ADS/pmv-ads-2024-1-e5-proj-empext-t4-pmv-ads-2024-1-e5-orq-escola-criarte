using FluentValidation;
using InformativoOEC.Application.Models.InputModels;
using System.Text.RegularExpressions;

namespace InformativoOEC.Application.Services.User;
public class UserValidator : AbstractValidator<UserInputModel>
{
    public UserValidator()
    {
        RuleFor(u => u.Name)
            .NotEmpty()
            .NotNull()
            .WithMessage("Nome não pode estar vazio");

        RuleFor(u => u.Password)
            .Must(ValidPassword)
            .WithMessage("Senha deve conter pelo menos 8 caracteres, um número, uma letra maiúscula, uma minúscula, e um caractere especial");

        RuleFor(u => u.Email)
            .EmailAddress()
            .WithMessage("E-mail inválido");
    }

    private static bool ValidPassword(string password)
    {
        var regex = new Regex(@"^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!*@#$%^&+=]).*$");

        return regex.IsMatch(password);
    }
}
