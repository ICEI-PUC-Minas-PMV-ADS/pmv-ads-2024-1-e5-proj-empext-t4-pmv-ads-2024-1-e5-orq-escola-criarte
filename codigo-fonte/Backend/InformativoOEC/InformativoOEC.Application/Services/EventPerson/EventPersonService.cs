using InformativoOEC.Application.Models.InputModels;
using InformativoOEC.Application.Models.ViewModels;
using InformativoOEC.Core.Entities;
using InformativoOEC.Core.Enums;
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

        bool existPersonInCurrentEvent = await _repository.GetEventPersonByEvent(@event.Id, input.Email);

        if (existPersonInCurrentEvent)
        {
            throw new ValidationErrorsException("Usuário já cadastrado para este evento");
        }

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

    public async Task<EventPersonViewModel> GetEventPeople(Guid eventId, EventPersonEnum personType)
    {
        List<Core.Entities.EventPerson> eventPeople = await _repository.GetEventPeople(eventId, personType);

        var eventPeopleModel = eventPeople.Select(ep => new EventPersonModel(ep)).ToList();

        var viewModel = new EventPersonViewModel(eventPeopleModel.Count, eventPeopleModel);

        return viewModel;
    }
}
