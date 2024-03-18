using InformativoOEC.Application.Services.Newsfeed;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace InformativoOEC.API.Controllers;
[Route("api/[controller]")]
[ApiController]
public class NewsfeedController : ControllerBase
{
    private readonly INewsfeedService _newsfeedService;
    public NewsfeedController(INewsfeedService newsfeedService)
    {
        _newsfeedService = newsfeedService;
    }

    [HttpGet]
    [Authorize(Roles = "Admin, User")]
    public async Task<IActionResult> GetAll()
    {
        var result = await _newsfeedService.GetAll();

        return Ok(result);
    }
}
