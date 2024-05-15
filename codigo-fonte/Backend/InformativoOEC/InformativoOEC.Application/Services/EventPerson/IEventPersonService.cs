using InformativoOEC.Application.Models.InputModels;

namespace InformativoOEC.Application.Services.EventPerson;
public interface IEventPersonService
{
    Task Create(EventPersonInputModel input);
}
