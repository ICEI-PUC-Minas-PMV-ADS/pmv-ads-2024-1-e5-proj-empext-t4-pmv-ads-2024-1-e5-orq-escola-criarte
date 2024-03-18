using InformativoOEC.Core.Entities;

namespace InformativoOEC.Core.Repositories;
public interface IPostRepository
{
    Task AddAsync(Post post);
    Task<List<Post>> GetAllAsync();
}
