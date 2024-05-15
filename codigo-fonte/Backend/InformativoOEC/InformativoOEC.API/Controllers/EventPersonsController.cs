using InformativoOEC.Application.Models.InputModels;
using InformativoOEC.Application.Services.EventPerson;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace InformativoOEC.API.Controllers;
[Route("api/[controller]")]
[ApiController]
public class EventPersonsController : ControllerBase
{
    private readonly IEventPersonService _eventPersonService;

    public EventPersonsController(IEventPersonService eventPersonService)
    {
        _eventPersonService = eventPersonService;
    }

    [HttpPost]
    [Authorize(Roles = "Admin")]
    public async Task<IActionResult> Create([FromBody] EventPersonInputModel input)
    {
        await _eventPersonService.Create(input);

        return Ok();
    }
}
