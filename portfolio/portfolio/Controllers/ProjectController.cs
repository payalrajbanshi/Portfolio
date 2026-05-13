using Microsoft.AspNetCore.Mvc;
using portfolio.coreLayer.Interface;
[ApiController]
[Route("api/projects")]
public class ProjectsController : ControllerBase
{
    private readonly IProjectService _service;

    public ProjectsController(IProjectService service)
    {
        _service = service;
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        return Ok(await _service.GetAllProjects());
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(int id)
    {
        var project = await _service.GetProjectById(id);
        if (project == null) return NotFound();
        return Ok(project);
    }
}