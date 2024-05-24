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
    [AllowAnonymous]
    public async Task<IActionResult> EmailRecovery(RecoveryPasswordInputModel input)
    {
        await _service.Create(input);

        return Ok();
    }

    [HttpGet]
    [AllowAnonymous]
    public async Task<IActionResult> ValidateCode(string email, long code)
    {
        bool result = await _service.GetCodeByEmail(email, code);

        return Ok(result);
    }
}
