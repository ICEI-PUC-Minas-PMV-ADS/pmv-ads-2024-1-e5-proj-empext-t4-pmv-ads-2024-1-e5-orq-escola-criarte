using InformativoOEC.Core.Repositories;
using InformativoOEC.Infra.Persistence.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace InformativoOEC.Infra;
public static class InfraModule
{
    public static void AddInfra(this IServiceCollection services)
    {
        var connectionString = Environment.GetEnvironmentVariable("CS_MYSQL_LOCALHOST_INFORMATIVO_OEC");

        AddDb(services, connectionString);
        AddRepositories(services);

    }

    private static IServiceCollection AddDb(this IServiceCollection services, string? connectionString)
    {
        services.AddDbContext<InformativoOECDbContext>(options =>
        {
            options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString));
        });

        return services;
    }

    private static IServiceCollection AddRepositories(this IServiceCollection services)
    {
        services
            .AddScoped<IUserRepository, UserRepository>()
            .AddScoped<IPostRepository, PostRepository>()
            .AddScoped<INewsRepository, NewsRepository>()
            .AddScoped<IEventRepository, EventRepository>()
            .AddScoped<IEventPersonRepository, EventPersonRepository>()
            .AddScoped<IRecoveryPasswordRepository, RecoveryPasswordRepository>();

        return services;
    }
}
