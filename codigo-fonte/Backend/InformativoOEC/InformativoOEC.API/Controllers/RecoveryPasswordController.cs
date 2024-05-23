using InformativoOEC.Application.Models.InputModels;
using InformativoOEC.Application.Services.RecoveryPassword;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace InformativoOEC.API.Controllers;
[Route("api/[controller]")]
[ApiController]
public class RecoveryPasswordController : ControllerBase
{
    private readonly IRecoveryPasswordService _service;

    public RecoveryPasswordController(IRecoveryPasswordService service)
    {
        _service = service;
    }

    [HttpPost]
    [Authorize(Roles = "Admin, User")]
    public async Task<IActionResult> EmailRecovery(RecoveryPasswordInputModel input)
    {
        await _service.Create(input);

        return Ok();
    }

    //[HttpPost]
    //public async Task<IActionResult> SendEmailByGmail()
    //{
    //    try
    //    {           
    //        var email = new MimeMessage();

    //        email.From.Add(new MailboxAddress("Escola Criarte", "orquestracriarteapp@gmail.com"));
    //        email.To.Add(new MailboxAddress("Bruno", "bruno.olympio.ferreira@gmail.com"));

    //        email.Subject = "Teste e-mail";
    //        email.Body = new TextPart(MimeKit.Text.TextFormat.Html)
    //        {
    //            Text = "<b>Testando email</b>"
    //        };

    //        using (var smtp = new SmtpClient())
    //        {
    //            smtp.Connect("smtp.gmail.com", 587, false);

    //            smtp.Authenticate("orquestracriarteapp@gmail.com", "jbfy ecds xdzk jbkr");

    //            smtp.Send(email);
    //            smtp.Disconnect(true);
    //        }

    //        return Ok();
    //    }
    //    catch (Exception ex)
    //    {
    //        throw new Exception(ex.Message, ex.InnerException);
    //    }
    //}
}
