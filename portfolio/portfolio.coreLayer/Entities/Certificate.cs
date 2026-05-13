using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace portfolio.coreLayer.Entities
{
    public  class Certificate
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string CertificateUrl { get; set; }
        public string Issuer { get; set; }
    }
}
