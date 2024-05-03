using FluentValidation;
using InformativoOEC.Application.Models.InputModels;

namespace InformativoOEC.Application.Services.News;
public class NewsValidation : AbstractValidator<NewsInputModel>
{
    public NewsValidation()
    {
        RuleFor(p => p.Title)
        .NotEmpty()
        .NotNull()
        .WithMessage("Titulo não pode estar vazio");

        RuleFor(p => p.Description)
        .NotEmpty()
        .NotNull()
        .WithMessage("Descrição não pode estar vazio");

        RuleFor(p => p.ImageURL)
        .NotEmpty()
        .NotNull()
        .WithMessage("URL não pode estar vazia");
    }
}
