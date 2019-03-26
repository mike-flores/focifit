using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FociFit.Models.Requests
{
    public class AccountCreateRequest
    {
        public string Email { get; set; }
        public string Password { get; set; }
        public string ModifiedBy { get; set; }
    }
}
