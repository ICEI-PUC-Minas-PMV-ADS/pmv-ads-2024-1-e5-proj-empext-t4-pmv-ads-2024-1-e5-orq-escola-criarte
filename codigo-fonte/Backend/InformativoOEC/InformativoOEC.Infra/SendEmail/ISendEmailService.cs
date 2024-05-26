namespace InformativoOEC.Infra.SendEmail;
public interface ISendEmailService
{
    Task Send(EmailModel model);
}
