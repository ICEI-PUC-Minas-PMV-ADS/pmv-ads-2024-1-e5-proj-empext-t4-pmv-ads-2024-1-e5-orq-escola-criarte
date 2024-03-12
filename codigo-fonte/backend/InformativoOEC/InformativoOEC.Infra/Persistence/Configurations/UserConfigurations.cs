using InformativoOEC.Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace InformativoOEC.Infra.Persistence.Configurations;
public class UserConfigurations : IEntityTypeConfiguration<User>
{
    public void Configure(EntityTypeBuilder<User> builder)
    {
        builder.HasKey(u => u.Id);

        builder.Property(u =>u.Name).HasMaxLength(200).IsRequired();
        builder.Property(u => u.Email).HasMaxLength(100).IsRequired();
        builder.Property(u => u.Password).HasMaxLength(100).IsRequired();
        builder.Property(u => u.Role).HasConversion(typeof(string)).IsRequired();
    }
}
