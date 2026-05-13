using Microsoft.EntityFrameworkCore;
using portfolio.coreLayer.Entities;
using portfolio.coreLayer.Interface;
using portfolio.coreLayer.Services;
using portfolio.infrastructure.Data;
using portfolio.infrastructure.Repositories;

            var builder = WebApplication.CreateBuilder(args);
          
          
            builder.Services.AddControllers();
builder.Services.AddDbContext<PortfolioDbContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")
    ));
builder.Services.AddScoped(typeof(IGenericRepository<>), typeof(GenericRepository<>));
builder.Services.Configure<EmailSettings>(
    builder.Configuration.GetSection("EmailSettings"));

builder.Services.AddScoped<IEmailService, EmailService>();

builder.Services.AddScoped<IProjectService, ProjectService>();
builder.Services.AddScoped<ISkillService, SkillService>();
builder.Services.AddScoped<ICertificateService, CertificateService>();
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend",
        policy =>
        {
            policy.WithOrigins("http://localhost:5173") 
                  .AllowAnyHeader()
                  .AllowAnyMethod();
        });
});


builder.Services.AddOpenApi();

            var app = builder.Build();

            if (app.Environment.IsDevelopment())
            {
                app.MapOpenApi();
            }

            app.UseHttpsRedirection();
app.UseCors("AllowFrontend");

app.UseAuthorization();


            app.MapControllers();

            app.Run();
       
