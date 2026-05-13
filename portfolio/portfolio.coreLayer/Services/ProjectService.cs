using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using portfolio.coreLayer.Entities;
using portfolio.coreLayer.Interface;

namespace portfolio.coreLayer.Services
{
    public class ProjectService:IProjectService
    {
        private readonly IGenericRepository<Project> _repo;
        public ProjectService(IGenericRepository<Project> repo)
        {
            _repo = repo;
        }
        public async Task<List<Project>> GetAllProjects()
        {
            return await _repo.GetAllAsync();

        }
        public async Task<Project> GetProjectById (int id)
        {
            return await _repo.GetByIdAsync(id);
        }
    }
}
