namespace InformativoOEC.Core.Entities;
public class RecoveryPassword : BaseEntity
{
    public RecoveryPassword(string email, long code)
    {
        Email = email;
        Code = code;
    }

    public string Email { get; private set; }
    public long Code { get; private set; }
}
