using InformativoOEC.Application.Models.InputModels;
using InformativoOEC.Application.Services.EventPerson;
using InformativoOEC.Core.Enums;
using Microsoft.AspNetCore.Authorization;
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
    [Authorize(Roles = "Admin, User")]
    public async Task<IActionResult> Create([FromBody] EventPersonInputModel input)
    {
        await _eventPersonService.Create(input);

        return Ok();
    }

    [HttpGet]
    public async Task<IActionResult> GetEventPeopleByEventId(Guid eventId, EventPersonEnum personType)
    {
        var result = await _eventPersonService.GetEventPeople(eventId, personType);

        return Ok(result);
    }
}
