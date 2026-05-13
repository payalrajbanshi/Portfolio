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
    public  class ProjectConfiguration:IEntityTypeConfiguration<Project>
    {
        public void Configure(EntityTypeBuilder<Project> builder)
        {
            builder.ToTable("Projects");
            builder.HasKey(p => p.Id);
            builder.Property(p => p.Title)
            .IsRequired()
            .HasMaxLength(200)
            .HasColumnName("title");
            builder.Property(p => p.Description)
                   .HasColumnType("NVARCHAR(MAX)")
            .HasColumnName("description");

            builder.Property(p => p.TechStack)
                   .HasMaxLength(300).
            HasColumnName("tech_stack");

        builder.Property(p => p.ImageUrl)
               .HasMaxLength(500)
            .HasColumnName("image_url");

            builder.Property(p => p.GitHubUrl)
                   .HasMaxLength(500)
            .HasColumnName("github_ur");
        }

        
    }
}
