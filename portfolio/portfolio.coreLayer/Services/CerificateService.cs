using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using portfolio.coreLayer.Interface;
using portfolio.coreLayer.Entities;
namespace portfolio.coreLayer.Services
{
    public class CertificateService : ICertificateService
    {
        private readonly IGenericRepository<Certificate> _repo;

        public CertificateService(IGenericRepository<Certificate> repo)
        {
            _repo = repo;
        }

        public async Task<List<Certificate>> GetAllCertificates()
        {
            return await _repo.GetAllAsync();
        }
    }
}
