using InformativoOEC.Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace InformativoOEC.Infra.Persistence.Configurations;
public class NewsConfiguration : IEntityTypeConfiguration<News>
{
    public void Configure(EntityTypeBuilder<News> builder)
    {
        builder.HasKey(n => n.Id);

        builder.Property(n => n.Title).HasMaxLength(150).IsRequired();
        builder.Property(n => n.Description).HasMaxLength(1000).IsRequired();
        builder.Property(n => n.ImageURL).IsRequired();
    }
}
