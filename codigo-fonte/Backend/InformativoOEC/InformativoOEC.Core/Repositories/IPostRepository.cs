using InformativoOEC.Core.Entities;

namespace InformativoOEC.Core.Repositories;
public interface IPostRepository
{
    Task AddAsync(Post post);
    Task<List<Post>> GetAllAsync();
    void Update(Post post);
    Task<Post> GetByIdAsync(Guid id);
    Task DeleteAsync(Guid id);
}
