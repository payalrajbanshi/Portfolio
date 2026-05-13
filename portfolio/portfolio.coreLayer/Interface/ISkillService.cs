using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using portfolio.coreLayer.Entities;
namespace portfolio.coreLayer.Interface
{
    public interface ISkillService
    {
        Task<List<Skill>> GetAllSkills();
    }
}
