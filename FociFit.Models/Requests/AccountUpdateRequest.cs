using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FociFit.Models.Requests
{
    public class AccountUpdateRequest : AccountCreateRequest
    {
        public int? Id { get; set; }
    }
}
