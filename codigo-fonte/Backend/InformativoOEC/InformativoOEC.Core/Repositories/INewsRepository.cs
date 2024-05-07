using InformativoOEC.Core.Entities;

namespace InformativoOEC.Core.Repositories;
public interface INewsRepository
{
    Task AddAsync(News news);
    Task<List<News>> GetAllAsync();
    Task<News> GetByIdAsync(Guid id);
    Task Delete(Guid id);
}
