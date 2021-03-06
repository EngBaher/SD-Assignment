using API.Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace API.Infrustructure.Data.Config
{
    public class StepConfigration : IEntityTypeConfiguration<Step>
    {
        public void Configure(EntityTypeBuilder<Step> builder)
        {
            builder.HasMany(o => o.StepItems).WithOne().OnDelete(DeleteBehavior.Cascade);
        }
    }
}