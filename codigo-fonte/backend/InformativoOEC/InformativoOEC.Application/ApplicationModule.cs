using InformativoOEC.Application.Services.Account;
using InformativoOEC.Application.Services.Authentication;
using InformativoOEC.Application.Services.User;
using Microsoft.Extensions.DependencyInjection;

namespace InformativoOEC.Application;
public static class ApplicationModule
{
    public static void AddApplication(this IServiceCollection services)
    {
        AddServices(services);
    }

    private static IServiceCollection AddServices(this IServiceCollection services)
    {
        services
            .AddScoped<IUserService, UserService>()
            .AddScoped<IAuthService, AuthService>()
            .AddScoped<ILoginService, LoginService>();

        return services;
    }
}
