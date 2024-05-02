using InformativoOEC.Application.Models.InputModels;
using InformativoOEC.Application.Services.Post;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace InformativoOEC.API.Controllers;
[Route("api/[controller]")]
[ApiController]
public class PostsController : ControllerBase
{
    private readonly IPostService _postService;
    public PostsController(IPostService postService)
    {
        _postService = postService;
    }

    [HttpPost]
    [Authorize(Roles = "Admin")]
    public async Task<IActionResult> Create([FromBody] PostInputModel model)
    {
        var result = await _postService.Create(model);

        return Ok(result.Id);
    }

    [HttpPut("{id}")]
    [Authorize(Roles = "Admin")]
    public async Task<IActionResult> Update([FromBody] PostInputModel model, Guid id)
    {
        await _postService.Update(model, id);

        return NoContent();
    }

    [HttpGet("{id}")]
    [Authorize(Roles = "Admin")]
    public async Task<IActionResult> GetById(Guid id)
    {
        var result = await _postService.GetById(id);

        return Ok(result);
    }

    [HttpDelete("{id}")]
    [Authorize(Roles = "Admin")]
    public async Task<IActionResult> DeleteById(Guid id)
    {
        await _postService.DeleteById(id);

        return NoContent();
    }
}
