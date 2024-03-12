using InformativoOEC.Application.Models.InputModels;
using InformativoOEC.Application.Services.User;
using InformativoOEC.Core.Enums;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace InformativoOEC.API.Controllers;
[Route("api/[controller]")]
[ApiController]
public class UsersController : ControllerBase
{
    private readonly IUserService _userService;
    public UsersController(IUserService userService)
    {
        _userService = userService;
    }

    [HttpPost]
    [AllowAnonymous]
    public async Task<IActionResult> Create([FromBody] UserInputModel model)
    {
        var result = await _userService.AddAsync(model);

        return Ok(result);
    }

    [HttpGet("{id}")]
    [Authorize(Roles = "Admin, User")]
    public async Task<IActionResult> GetUserById(Guid id)
    {
        var result = await _userService.GetById(id);

        return Ok(result);
    }

    [HttpPut("{id}")]
    [Authorize(Roles = "Admin, User")]
    public async Task<IActionResult> UpdateUser([FromBody] UserInputModel model, Guid id)
    {
        await _userService.Update(model, id);

        return NoContent();
    }
}
