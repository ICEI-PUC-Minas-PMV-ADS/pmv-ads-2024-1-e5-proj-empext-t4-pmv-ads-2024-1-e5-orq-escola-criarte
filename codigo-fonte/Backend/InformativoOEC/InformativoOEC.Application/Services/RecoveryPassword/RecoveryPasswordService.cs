using InformativoOEC.Application.Models.InputModels;
using InformativoOEC.Core.Exceptions;
using InformativoOEC.Core.Repositories;

namespace InformativoOEC.Application.Services.RecoveryPassword;
public class RecoveryPasswordService : IRecoveryPasswordService
{
    private readonly IRecoveryPasswordRepository _repository;
    public RecoveryPasswordService(IRecoveryPasswordRepository repository)
    {
        _repository = repository;
    }
    public async Task Create(RecoveryPasswordInputModel input)
    {
        Validate(input);

        long code = new Random().Next(1000, 10000);

        Core.Entities.RecoveryPassword recovery = input.ToEntity(code);

        await _repository.AddAsync(recovery);

        //enviar email para o usuário informando o código
    }

    private void Validate(RecoveryPasswordInputModel input)
    {
        var validator = new RecoveryPasswordValidation();
        var result = validator.Validate(input);

        if (!result.IsValid)
        {
            var errorMessages = result.Errors.Select(err => err.ErrorMessage).ToList();
            throw new ValidationErrorsException(errorMessages);
        }
    }
}
