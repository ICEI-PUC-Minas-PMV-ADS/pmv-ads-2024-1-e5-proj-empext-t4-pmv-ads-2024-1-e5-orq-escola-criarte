using InformativoOEC.Application.Models.InputModels;
using InformativoOEC.Application.Models.ViewModels;
using InformativoOEC.Application.Services.Event;
using InformativoOEC.Core.Exceptions;
using InformativoOEC.Core.Repositories;

namespace InformativoOEC.Application.Services.Post;
public class PostService : IPostService
{
    private readonly IPostRepository _postRepository;
    private readonly IEventService _eventService;
    public PostService(IPostRepository postRepository, IEventService eventService)
    {
        _postRepository = postRepository;
        _eventService = eventService;
    }
    public async Task<PostViewModel> Create(PostInputModel model)
    {
        Validate(model);

        Core.Entities.Post post = model.ToEntity();

        await _postRepository.AddAsync(post);

        EventInputModel eventInputModel = new(post.Id);

        await _eventService.Create(eventInputModel);

        return new PostViewModel() { Id = post.Id };
    }

    public async Task DeleteById(Guid id)
    {
        await _postRepository.Delete(id);
    }

    public async Task<PostViewModel> GetById(Guid id)
    {
        Core.Entities.Post post = await _postRepository.GetByIdAsync(id) ??
            throw new ValidationErrorsException("Post com este id não existe");

        if (post.Event == null)
        {
            post.Event = new();
            post.Event.Id = Guid.Empty;
        }

        PostViewModel viewModel = new(post);

        return viewModel;
    }

    public async Task Update(PostInputModel model, Guid id)
    {
        Validate(model);

        Core.Entities.Post post = await _postRepository.GetByIdAsync(id);

        post.Update(model.Content, model.ImageURL, model.Date, model.Address, model.Username);

        _postRepository.Update(post);
    }

    private void Validate(PostInputModel model)
    {
        var validator = new PostValidation();
        var result = validator.Validate(model);

        if (!result.IsValid)
        {
            var errorMessages = result.Errors.Select(err => err.ErrorMessage).ToList();
            throw new ValidationErrorsException(errorMessages);
        }
    }
}
