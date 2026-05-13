using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace portfolio.coreLayer.Entities
{
    public class Project
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string TechStack { get; set; }
        public string ImageUrl { get; set; }
        public string GitHubUrl { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
