using InformativoOEC.Core.Entities;
using Microsoft.EntityFrameworkCore;
using System.Reflection;

namespace InformativoOEC.Infra;
public class InformativoOECDbContext : DbContext
{
    public InformativoOECDbContext(DbContextOptions<InformativoOECDbContext> options) : base(options) { }

    public DbSet<User> Users { get; set; }
    public DbSet<Post> Posts { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
    }
}
