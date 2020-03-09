using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Mvc;
using ErrorkbDataAccess;
using Google.Protobuf.WellKnownTypes;

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

        [System.Web.Http.Route("Api/PostNewUser")]
        [System.Web.Http.HttpPost]
        public IHttpActionResult PostNewUser(string username, string password,string priv)
        {
            using (errorkbEntities1 entities = new errorkbEntities1())
            {
                if(priv == "user" || priv == "admin")
                {
                    entities.users.Add(new user()
                    {
                        username = username,
                        passwd = password,
                        privileges = priv
                    });
                    entities.SaveChanges();

                    return Ok();
                    
                }
                else
                {
                    return Content(HttpStatusCode.BadRequest, "Any object");

                }
            }            
        }

    }
}
