using InformativoOEC.Core.Entities;
using InformativoOEC.Core.Enums;

namespace InformativoOEC.Application.Models.InputModels;
public class EventPersonInputModel
{
    public string UserName { get; set; }
    public string Email { get; set; }
    public EventPersonEnum PersonType { get; set; }
    public Guid EventId { get; set; }

    public EventPerson ToEntity() => new(UserName, Email, PersonType);
}
