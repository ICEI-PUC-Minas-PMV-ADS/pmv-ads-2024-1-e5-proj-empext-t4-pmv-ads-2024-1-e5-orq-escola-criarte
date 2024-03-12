using InformativoOEC.Application.Models.ViewModels;
using InformativoOEC.Core.Exceptions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System.Net;

namespace InformativoOEC.API.Filters;

public class ExceptionsFilter : IExceptionFilter
{
    public void OnException(ExceptionContext context)
    {
        if (context.Exception is InformativoOecException)
            HandleInformativoOecException(context);
        else
            ThrowUnknownError(context);
    }

    private static void HandleInformativoOecException(ExceptionContext context)
    {
        if (context.Exception is ValidationErrorsException)
            HandleValidationErrorsException(context);
    }

    private static void HandleValidationErrorsException(ExceptionContext context)
    {
        var validationErrorException = context.Exception as ValidationErrorsException;
        context.HttpContext.Response.StatusCode = (int)HttpStatusCode.BadRequest;
        if (validationErrorException.Message != null)
        {
            context.Result = new ObjectResult(validationErrorException.Message);
        }
        else
        {
            context.Result = new ObjectResult(new ErrorViewModel(validationErrorException.ErrorMessages));
        }
    }

    private static void ThrowUnknownError(ExceptionContext context)
    {
        context.HttpContext.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
        context.Result = new ObjectResult(new ErrorViewModel("Erro Desconhecido"));
    }
}
