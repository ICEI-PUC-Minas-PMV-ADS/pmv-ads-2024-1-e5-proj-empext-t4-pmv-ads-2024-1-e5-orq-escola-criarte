using InformativoOEC.Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace InformativoOEC.Infra.Persistence.Configurations;
public class RecoveryPasswordConfigurations : IEntityTypeConfiguration<RecoveryPassword>
{
    public void Configure(EntityTypeBuilder<RecoveryPassword> builder)
    {
        builder.HasKey(r => r.Id);

        builder.Property(r => r.Email).HasMaxLength(200).IsRequired();
        builder.Property(r => r.Code).HasMaxLength(10).IsRequired();
    }
}
