using InformativoOEC.Core.Entities;

namespace InformativoOEC.Core.Repositories;
public interface IUserRepository
{
    Task AddAsync(User user);
    void Update(User user);

    Task<bool> ExistsUserWithEmail(string email, Guid id);
    Task<User> GetUserByEmailAndPasswordAsync(string email, string passwordHash);
    Task<User> GetUserById(Guid id);
    Task<List<User>> GetAll();
}
