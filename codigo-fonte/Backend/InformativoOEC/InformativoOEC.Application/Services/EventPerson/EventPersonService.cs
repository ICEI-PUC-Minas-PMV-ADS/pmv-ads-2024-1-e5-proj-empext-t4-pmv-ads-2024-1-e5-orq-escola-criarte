using InformativoOEC.Application.Models.InputModels;
using InformativoOEC.Core.Exceptions;
using InformativoOEC.Core.Repositories;

namespace InformativoOEC.Application.Services.EventPerson;
public class EventPersonService : IEventPersonService
{
    private readonly IEventPersonRepository _repository;
    private readonly IEventRepository _eventRepository;
    public EventPersonService(IEventPersonRepository repository)
    {
        _repository = repository;
    }
    public async Task Create(EventPersonInputModel input)
    {
        Validate(input);

        Core.Entities.EventPerson eventPerson = input.ToEntity();

        await _repository.AddAsync(eventPerson);
    }

    private static void Validate(EventPersonInputModel input) 
    {
        var validator = new EventPersonValidation();
        var result = validator.Validate(input);

        if (!result.IsValid)
        {
            var errorMessages = result.Errors.Select(err => err.ErrorMessage).ToList();
            throw new ValidationErrorsException(errorMessages);
        }
    }
}
