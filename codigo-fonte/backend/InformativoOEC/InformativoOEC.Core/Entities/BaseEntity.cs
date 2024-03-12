namespace InformativoOEC.Core.Entities;
public class BaseEntity
{
    public BaseEntity()
    {
        Id = Guid.NewGuid();
        CreatedAt = DateTime.Now;
    }

    public Guid Id { get; set; }
    public DateTime? CreatedAt { get; private set; }
    public DateTime? UpdatedAt { get; set; }
}
