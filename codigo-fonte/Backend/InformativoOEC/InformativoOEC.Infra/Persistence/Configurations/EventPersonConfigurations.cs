using InformativoOEC.Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace InformativoOEC.Infra.Persistence.Configurations;
public class EventPersonConfigurations : IEntityTypeConfiguration<EventPerson>
{
    public void Configure(EntityTypeBuilder<EventPerson> builder)
    {
        builder.HasKey(ep => ep.Id);

        builder.Property(ep => ep.UserName).HasMaxLength(200).IsRequired();
        builder.Property(ep => ep.Email).HasMaxLength(200).IsRequired();
        builder.Property(ep => ep.PersonType).HasConversion(typeof(string)).HasColumnType("varchar(50)").IsRequired();
    }
}
