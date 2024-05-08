using InformativoOEC.Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace InformativoOEC.Infra.Persistence.Configurations;
public class PostConfigurations : IEntityTypeConfiguration<Post>
{
    public void Configure(EntityTypeBuilder<Post> builder)
    {
        builder.HasKey(p => p.Id);

        builder.Property(p => p.Username).HasMaxLength(100).IsRequired();
        builder.Property(p => p.ImageURL).HasColumnType("mediumblob").IsRequired();
        builder.Property(p => p.Date).IsRequired();

        builder.OwnsOne(p => p.Content)
            .Property(c => c.Title)
            .HasColumnName("Title")
            .HasMaxLength(200)
            .IsRequired();

        builder.OwnsOne(p => p.Content)
            .Property(c => c.Body)
            .HasColumnName("Body")
            .HasMaxLength(1000)
            .IsRequired();

        builder.OwnsOne(p => p.Address)
            .Property(c => c.Street)
            .HasColumnName("Address")
            .HasMaxLength(200)
            .IsRequired();

        builder.OwnsOne(p => p.Address)
            .Property(c => c.Number)
            .HasColumnName("Number")
            .HasMaxLength(20)
            .IsRequired();

        builder.OwnsOne(p => p.Address)
            .Property(c => c.County)
            .HasColumnName("County")
            .HasMaxLength(200)
            .IsRequired();
    }
}
