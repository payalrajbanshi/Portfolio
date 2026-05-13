using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using portfolio.coreLayer.Entities;
using portfolio.coreLayer.Interface;
namespace portfolio.coreLayer.Services
{
    public  class SkillService:ISkillService
    {
        private readonly IGenericRepository<Skill> _repo;

        public SkillService(IGenericRepository<Skill> repo)
        {
            _repo = repo;
        }

        public async Task<List<Skill>> GetAllSkills()
        {
            return await _repo.GetAllAsync();
        }
    }
}
