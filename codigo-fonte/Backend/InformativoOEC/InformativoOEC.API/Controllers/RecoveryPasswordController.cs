using InformativoOEC.Application.Models.InputModels;
using InformativoOEC.Application.Services.RecoveryPassword;
using InformativoOEC.Application.Services.User;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace InformativoOEC.API.Controllers;
[Route("api/[controller]")]
[ApiController]
public class RecoveryPasswordController : ControllerBase
{
    private readonly IRecoveryPasswordService _service;
    private readonly IUserService _userService;

    public RecoveryPasswordController(IRecoveryPasswordService service, IUserService userService)
    {
        _service = service;
        _userService = userService;
    }

    [HttpPost]
    [Route("email-recovery")]
    [AllowAnonymous]
    public async Task<IActionResult> EmailRecovery(RecoveryPasswordInputModel input)
    {
        await _service.Create(input);

        return Ok();
    }

    [HttpGet]
    [Route("validate-code")]
    [AllowAnonymous]
    public async Task<IActionResult> ValidateCode(string email, long code)
    {
        bool result = await _service.GetCodeByEmail(email, code);

        return Ok(result);
    }

    [HttpPut]
    [Route("update-password")]
    [AllowAnonymous]
    public async Task<IActionResult> Update([FromBody] UpdatePasswordInputModel input)
    {
        await _userService.Update(input);

        return Ok();
    }
}
