using portfolio.coreLayer.DTO;
using portfolio.coreLayer.Entities;
using portfolio.coreLayer.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Runtime.InteropServices.Marshalling;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Extensions.Options;

namespace portfolio.coreLayer.Services
{
    public class EmailService:IEmailService
    {
        private readonly EmailSettings _settings;
        public EmailService(IOptions<EmailSettings> settings)
        {
            _settings = settings.Value;
        }

        public async Task SendEmailAsync(ContactDTO dto)
        {
            var mail = new MailMessage
            {
                From = new MailAddress(_settings.SenderEmail, _settings.SenderName),
                Subject = $"New Message from {dto.Name}",
                Body = $"Name: {dto.Name}\nEmail: {dto.Email}\nMessage: {dto.Message}",
                IsBodyHtml = false
            };

            mail.To.Add(_settings.SenderEmail);

            var smtp = new SmtpClient(_settings.SmtpServer, _settings.Port)
            {
                Credentials = new NetworkCredential(_settings.SenderEmail, _settings.AppPassword),
                EnableSsl = true
            };

            await smtp.SendMailAsync(mail);
        }

    }
}
