using InformativoOEC.Application.Models.InputModels;

namespace InformativoOEC.Application.Services.Event;
public interface IEventService
{
    Task Create(EventInputModel input);
}
