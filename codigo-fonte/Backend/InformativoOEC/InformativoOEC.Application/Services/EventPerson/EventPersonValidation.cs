using FluentValidation;
using InformativoOEC.Application.Models.InputModels;

namespace InformativoOEC.Application.Services.EventPerson;
public class EventPersonValidation : AbstractValidator<EventPersonInputModel>
{
    public EventPersonValidation()
    {
        RuleFor(e => e.UserName)
            .NotEmpty()
            .NotNull()
            .WithMessage("Username não pode ser nulo ou vazio");

        RuleFor(e => e.Email)
            .NotEmpty()
            .NotNull()
            .EmailAddress()
            .WithMessage("Email inválido");

        RuleFor(e => e.PersonType)
            .NotNull()
            .WithMessage("Tipo de participante não pode ser nulo ou vazio");

        RuleFor(e => e.EventId)
            .NotEmpty()
            .NotNull()
            .WithMessage("Id do evento não pode ser nulo ou vazio");
    }
}
