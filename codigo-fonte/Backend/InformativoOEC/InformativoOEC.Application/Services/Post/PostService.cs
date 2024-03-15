using InformativoOEC.Application.Models.InputModels;
using InformativoOEC.Application.Models.ViewModels;
using InformativoOEC.Core.Exceptions;
using InformativoOEC.Core.Repositories;

namespace InformativoOEC.Application.Services.Post;
public class PostService : IPostService
{
    private readonly IPostRepository _postRepository;
    public PostService(IPostRepository postRepository)
    {
        _postRepository = postRepository;
    }
    public async Task<PostViewModel> Create(PostInputModel model)
    {
        Validate(model);

        Core.Entities.Post post = model.ToEntity();

        await _postRepository.AddAsync(post);

        return new PostViewModel() { Id = post.Id };
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
