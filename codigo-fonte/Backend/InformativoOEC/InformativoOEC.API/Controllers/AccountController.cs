using InformativoOEC.Application.Models.InputModels;
using InformativoOEC.Application.Services.Account;
using Microsoft.AspNetCore.Mvc;

namespace InformativoOEC.API.Controllers;
[Route("api/[controller]")]
[ApiController]
public class AccountController : ControllerBase
{
    private readonly ILoginService _loginService;
    public AccountController(ILoginService loginService)
    {
        _loginService = loginService;
    }

    [HttpPost("Login")]
    public async Task<IActionResult> Login(LoginInputModel model)
    {
        var result = await _loginService.Login(model);

        return Ok(result);
    }
}
