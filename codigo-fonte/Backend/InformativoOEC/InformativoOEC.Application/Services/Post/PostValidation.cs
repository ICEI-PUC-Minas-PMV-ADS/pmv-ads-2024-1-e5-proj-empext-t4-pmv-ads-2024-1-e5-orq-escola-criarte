using FluentValidation;
using InformativoOEC.Application.Models.InputModels;

namespace InformativoOEC.Application.Services.Post;
public class PostValidation : AbstractValidator<PostInputModel>
{
    public PostValidation()
    {
        RuleFor(p => p.Content.Title)
            .NotEmpty()
            .NotNull()
            .WithMessage("Titulo não pode estar vazio");
        RuleFor(p => p.Content.Body)
            .NotEmpty()
            .NotNull()
            .WithMessage("Body não pode estar vazio");
        RuleFor(p => p.ImageURL)
            .NotEmpty()
            .NotNull()
            .WithMessage("ImageURL não pode estar vazio");
        RuleFor(p => p.Date)
            .NotEmpty()
            .NotNull()
            .WithMessage("Data não pode estar vazia");
        RuleFor(p => p.Address.Street)
            .NotEmpty()
            .NotNull()
            .WithMessage("Nome da rua não pode estar vazio");
        RuleFor(p => p.Address.Number)
            .NotEmpty()
            .NotNull()
            .WithMessage("Numero da rua não pode estar vazio");
        RuleFor(p => p.Address.County)
            .NotEmpty()
            .NotNull()
            .WithMessage("Bairro não pode estar vazio");
        RuleFor(p => p.Username)
            .NotEmpty()
            .NotNull()
            .WithMessage("Nome do user não pode estar vazio");
    }
}
