using InformativoOEC.Core.Entities;

namespace InformativoOEC.Core.Repositories;
public interface IEventPersonRepository
{
    Task AddAsync(EventPerson eventPerson);
}
