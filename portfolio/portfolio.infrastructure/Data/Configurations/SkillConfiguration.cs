using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using portfolio.coreLayer.Entities;

namespace portfolio.infrastructure.Data.Configurations
{
    public class SkillConfiguration:IEntityTypeConfiguration<Skill>

    {
        public void Configure(EntityTypeBuilder<Skill> builder)
        {
            builder.ToTable("Skills");
            builder.HasKey(s => s.Id);
            builder.Property(s => s.Name)
       .IsRequired()
       .HasMaxLength(100)
       .HasColumnName("name");

            builder.Property(s => s.Category)
                   .HasMaxLength(100)
                   .HasColumnName("category");

            builder.Property(s => s.Proficiency)
                   .IsRequired()
                   .HasColumnName("proficiency");
        }
    }
}
