using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ErrorkbDataAccess;

namespace Errorkb_backend.Controllers
{

    public class UserController : ApiController
    {

        public IEnumerable<user> Get()
        {
            using (errorkbEntities1 entities = new errorkbEntities1())
            {
                return entities.users.ToList();
            }
        }

        public user Get(string username)
        {
            using (errorkbEntities1 entities = new errorkbEntities1())
            {
                return entities.users.FirstOrDefault(e => e.username == username);
            }
        }

    }
}
