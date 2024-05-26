using MailKit.Net.Smtp;
using MimeKit;

namespace InformativoOEC.Infra.SendEmail;
public class SendEmailService : ISendEmailService
{
    private const string NAME_ISSUER = "Escola Criarte";
    private const string EMAIL_ISSUER = "orquestracriarteapp@gmail.com";
    public async Task Send(EmailModel model)
    {
        var email = new MimeMessage();

        email.From.Add(new MailboxAddress(NAME_ISSUER, EMAIL_ISSUER));
        email.To.Add(new MailboxAddress(model.Username, model.Email));

        email.Subject = "Código para recuperação de senha no app da Escola Criarte";
        email.Body = new TextPart(MimeKit.Text.TextFormat.Html)
        {
            Text = $"<b>Insira este código no app para recuperar a sua senha: {model.Code}</b>"
        };

        using var smtp = new SmtpClient();
        smtp.Connect("smtp.gmail.com", 587, false);

        string emailGoogleKey = Environment.GetEnvironmentVariable("EMAIL_GOOGLE_KEY") ??
            throw new Exception("Google Key vazia ou nula");

        smtp.Authenticate(EMAIL_ISSUER, emailGoogleKey);

        await smtp.SendAsync(email);

        smtp.Disconnect(true);
    }
}
