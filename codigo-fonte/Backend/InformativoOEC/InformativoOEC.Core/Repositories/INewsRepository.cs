using InformativoOEC.Core.Entities;

namespace InformativoOEC.Core.Repositories;
public interface INewsRepository
{
    Task AddAsync(News news);
}
