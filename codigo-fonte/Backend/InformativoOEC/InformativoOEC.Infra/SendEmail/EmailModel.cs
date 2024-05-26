namespace InformativoOEC.Infra.SendEmail;
public class EmailModel
{
    public EmailModel(string username, string email, long code)
    {
        Username = username;
        Email = email;
        Code = code;
    }

    public string Username { get; private set; }
    public string Email { get; private set; }
    public long Code { get; private set; }
}
