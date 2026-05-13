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
    public class CertificateConfiguration:IEntityTypeConfiguration<Certificate>
    {
        public void Configure(EntityTypeBuilder<Certificate> builder )
        {
            builder.ToTable("Certificates");

            builder.HasKey(c => c.Id);

            builder.Property(c => c.Title)
                   .IsRequired()
                   .HasMaxLength(200)
                   .HasColumnName("title");

            builder.Property(c => c.Issuer)
                   .HasMaxLength(200)
                   .HasColumnName("issuer");

            builder.Property(c => c.CertificateUrl)
                   .HasMaxLength(500)
                   .HasColumnName("certificateUrl") ;
        }
    }
}
