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
                return entities.users.Where(e => e.username == username).FirstOrDefault();
            }
        }

        [System.Web.Http.Route("Api/PutNewUser")]
        [System.Web.Http.HttpPut]
        public IHttpActionResult PutNewUser(string oldUsername, string oldPassword, string newUsername,string newPassword,string newPriv)
        {
            using (errorkbEntities1 entities = new errorkbEntities1())
            {
                if(newPriv == "user" || newPriv == "admin")
                {
                    var existingUser = entities.users.Where(s => s.username == oldUsername && s.passwd==oldPassword).FirstOrDefault();

                    if (existingUser != null)
                    {
                        existingUser.username = newUsername;
                        existingUser.passwd = newPassword;
                        existingUser.privileges = newPriv;
                        
                        entities.SaveChanges();
                    }
                    else
                    {
                        return NotFound();
                    }
                    return Ok();
                    
                }

                return Content(HttpStatusCode.BadRequest, "Any object");
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

        [System.Web.Http.Route("Api/DeleteUser")]
        [System.Web.Http.HttpDelete]
        public IHttpActionResult DeleteUser(string username)
        {
            using (errorkbEntities1 entities = new errorkbEntities1())
            {
                var users = entities.users.Where(s => s.username == username).FirstOrDefault();
                entities.Entry(users).State = System.Data.Entity.EntityState.Deleted;
                    entities.SaveChanges();

                    return Ok();
                    
            }
        }
    }
}
