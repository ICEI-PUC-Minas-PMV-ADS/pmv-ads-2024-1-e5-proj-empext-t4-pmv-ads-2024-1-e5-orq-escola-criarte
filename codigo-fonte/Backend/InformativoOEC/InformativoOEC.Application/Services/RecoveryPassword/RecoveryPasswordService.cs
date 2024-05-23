using InformativoOEC.Application.Models.InputModels;
using InformativoOEC.Core.Exceptions;
using InformativoOEC.Core.Repositories;
using InformativoOEC.Infra.SendEmail;

namespace InformativoOEC.Application.Services.RecoveryPassword;
public class RecoveryPasswordService : IRecoveryPasswordService
{
    private readonly IRecoveryPasswordRepository _repository;
    private readonly ISendEmailService _sendEmail;
    public RecoveryPasswordService(IRecoveryPasswordRepository repository, ISendEmailService sendEmail)
    {
        _repository = repository;
        _sendEmail = sendEmail;
    }
    public async Task Create(RecoveryPasswordInputModel input)
    {
        Validate(input);

        long code = new Random().Next(1000, 10000);

        Core.Entities.RecoveryPassword recovery = input.ToEntity(code);

        await _repository.AddAsync(recovery);

        EmailModel email = new(input.Username, input.Email, code);
        await _sendEmail.Send(email);
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
