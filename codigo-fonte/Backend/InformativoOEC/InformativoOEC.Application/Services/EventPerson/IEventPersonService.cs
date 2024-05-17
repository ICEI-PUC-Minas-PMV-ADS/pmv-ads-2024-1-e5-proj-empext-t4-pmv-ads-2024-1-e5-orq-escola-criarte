using InformativoOEC.Application.Models.InputModels;
using InformativoOEC.Application.Models.ViewModels;
using InformativoOEC.Core.Enums;

namespace InformativoOEC.Application.Services.EventPerson;
public interface IEventPersonService
{
    Task Create(EventPersonInputModel input);
    Task<EventPersonViewModel> GetEventPeople(Guid eventId, EventPersonEnum personType);
}
