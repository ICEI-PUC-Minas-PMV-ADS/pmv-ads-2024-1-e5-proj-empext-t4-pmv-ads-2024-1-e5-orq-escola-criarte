using InformativoOEC.Application.Models.InputModels;
using InformativoOEC.Application.Services.News;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace InformativoOEC.API.Controllers;
[Route("api/[controller]")]
[ApiController]
public class NewsController : ControllerBase
{
    private readonly INewsService _newsService;
    public NewsController(INewsService newsService)
    {
        _newsService = newsService;
    }

    [HttpPost]
    [Authorize(Roles = "Admin")]
    public async Task<IActionResult> Create([FromBody] NewsInputModel input)
    {
        var result = await _newsService.Create(input);

        return Ok(result.Id);
    }

}
