using Microsoft.AspNetCore.Mvc;
using portfolio.coreLayer.Interface;
[ApiController]
[Route("api/certificates")]
public class CertificatesController : ControllerBase
{
    private readonly ICertificateService _service;

    public CertificatesController(ICertificateService service)
    {
        _service = service;
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        return Ok(await _service.GetAllCertificates());
    }
}