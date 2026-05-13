using Microsoft.AspNetCore.Mvc;
using portfolio.coreLayer.DTO;
using portfolio.coreLayer.Interface;

namespace portfolio.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContactController : ControllerBase
    {
        private readonly IEmailService _emailService;

        public ContactController(IEmailService emailService)
        {
            _emailService = emailService;
        }

        [HttpPost]
        public async Task<IActionResult> SendMessage([FromBody] ContactDTO dto)
        {
            if (string.IsNullOrWhiteSpace(dto.Email) || string.IsNullOrWhiteSpace(dto.Message))
                return BadRequest("Invalid data");

            await _emailService.SendEmailAsync(dto);
            return Ok("Message sent");
        }
    }
}
