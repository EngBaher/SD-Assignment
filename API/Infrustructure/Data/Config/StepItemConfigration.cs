using API.Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace API.Infrustructure.Data.Config
{
    public class StepItemConfigration : IEntityTypeConfiguration<StepItem>
    {
        public void Configure(EntityTypeBuilder<StepItem> builder)
        {
            builder.Property(i=>i.Titel).IsRequired().HasMaxLength(100);
        }
    }
}