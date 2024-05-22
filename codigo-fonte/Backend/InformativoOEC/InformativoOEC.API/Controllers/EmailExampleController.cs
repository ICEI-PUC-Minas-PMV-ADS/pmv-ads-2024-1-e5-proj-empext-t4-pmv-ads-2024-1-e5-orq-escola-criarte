using FluentEmail.Core;
using MailKit.Net.Smtp;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MimeKit;

namespace InformativoOEC.API.Controllers;
[Route("api/[controller]")]
[ApiController]
public class EmailExampleController : ControllerBase
{
    [HttpPost]
    public async Task<IActionResult> SendEmailByGmail()
    {
        try
        {
            var email = new MimeMessage();

            email.From.Add(new MailboxAddress("Escola Criarte", "orquestracriarteapp@gmail.com"));
            email.To.Add(new MailboxAddress("Bruno", "bruno.olympio.ferreira@gmail.com"));

            email.Subject = "Teste e-mail";
            email.Body = new TextPart(MimeKit.Text.TextFormat.Html)
            {
                Text = "<b>Testando email</b>"
            };

            using (var smtp = new SmtpClient())
            {
                smtp.Connect("smtp.gmail.com", 587, false);

                smtp.Authenticate("orquestracriarteapp@gmail.com", "jbfy ecds xdzk jbkr");

                smtp.Send(email);
                smtp.Disconnect(true);
            }

            return Ok();
        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message, ex.InnerException);
        }
    }
}
