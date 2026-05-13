using portfolio.coreLayer.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace portfolio.coreLayer.Interface
{
    public interface IEmailService
    {
        Task SendEmailAsync(ContactDTO dto);
    }
}
