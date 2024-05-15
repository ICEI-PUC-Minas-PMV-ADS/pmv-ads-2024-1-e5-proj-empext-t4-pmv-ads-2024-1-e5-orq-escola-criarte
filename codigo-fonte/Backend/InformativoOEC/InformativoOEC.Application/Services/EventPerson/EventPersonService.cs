using InformativoOEC.Application.Models.InputModels;
using InformativoOEC.Core.Exceptions;
using InformativoOEC.Core.Repositories;

namespace InformativoOEC.Application.Services.EventPerson;
public class EventPersonService : IEventPersonService
{
    private readonly IEventPersonRepository _repository;
    private readonly IEventRepository _eventRepository;
    public EventPersonService(IEventPersonRepository repository, IEventRepository eventRepository)
    {
        _repository = repository;
        _eventRepository = eventRepository;
    }
    public async Task Create(EventPersonInputModel input)
    {
        Validate(input);

        var @event = await _eventRepository.GetEventById(input.EventId);

        if (@event is null) throw new ValidationErrorsException("Não existe um evento com o id informado");

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
