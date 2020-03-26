using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Cryptography;
using System.Text;
using System.Web.Http;
using System.Web.Mvc;
using errorkb_backend.Models;
using ErrorkbDataAccess;
using Google.Protobuf.WellKnownTypes;

namespace Errorkb_backend.Controllers
{

    public class UserController : ApiController
    {
        private string Encrypt(string clearText)
        {
            string EncryptionKey = "MAKV2SPBNI9921232145545333421ASDAJHKADSF321";
            byte[] clearBytes = Encoding.Unicode.GetBytes(clearText);
            using (Aes encryptor = Aes.Create())
            {
                Rfc2898DeriveBytes pdb = new Rfc2898DeriveBytes(EncryptionKey, new byte[] { 0x49, 0x76, 0x61, 0x6e, 0x20, 0x4d, 0x65, 0x64, 0x76, 0x65, 0x64, 0x65, 0x76 });
                encryptor.Key = pdb.GetBytes(32);
                encryptor.IV = pdb.GetBytes(16);
                using (MemoryStream ms = new MemoryStream())
                {
                    using (CryptoStream cs = new CryptoStream(ms, encryptor.CreateEncryptor(), CryptoStreamMode.Write))
                    {
                        cs.Write(clearBytes, 0, clearBytes.Length);
                        cs.Close();
                    }
                    clearText = Convert.ToBase64String(ms.ToArray());
                }
            }
            return clearText;
        }
        private string Decrypt(string cipherText)
        {
            string EncryptionKey = "MAKV2SPBNI9921232145545333421ASDAJHKADSF321";
            byte[] cipherBytes = Convert.FromBase64String(cipherText);
            using (Aes encryptor = Aes.Create())
            {
                Rfc2898DeriveBytes pdb = new Rfc2898DeriveBytes(EncryptionKey, new byte[] { 0x49, 0x76, 0x61, 0x6e, 0x20, 0x4d, 0x65, 0x64, 0x76, 0x65, 0x64, 0x65, 0x76 });
                encryptor.Key = pdb.GetBytes(32);
                encryptor.IV = pdb.GetBytes(16);
                using (MemoryStream ms = new MemoryStream())
                {
                    using (CryptoStream cs = new CryptoStream(ms, encryptor.CreateDecryptor(), CryptoStreamMode.Write))
                    {
                        cs.Write(cipherBytes, 0, cipherBytes.Length);
                        cs.Close();
                    }
                    cipherText = Encoding.Unicode.GetString(ms.ToArray());
                }
            }
            return cipherText;
        }

        public IEnumerable<user> Get()
        {
            using (errorkbEntities1 entities = new errorkbEntities1())
            {
                return entities.users.ToList();
            }
        }
        public user Get(string uname,string password)
        {
            using (errorkbEntities1 entities = new errorkbEntities1())
            {
                var user = entities.users.Where(e => e.username == uname && e.passwd == Encrypt(password)).FirstOrDefault();
                return user;
            }
        }

        [System.Web.Http.Route("Api/GetAllUsers")]
        [System.Web.Http.HttpGet]
        public IHttpActionResult GetAllUsers()
        {
            IList<UserViewModel> entries = null;
            using (errorkbEntities1 entities = new errorkbEntities1())
            {
                entries = entities.users.Select(e => new UserViewModel()
                {
                    u_id = e.u_id,
                    username = e.username,
                    passwd = e.passwd,
                    privileges = e.privileges
                }
                ).ToList<UserViewModel>();
            }

            if (entries.Count == 0)
            {
                return NotFound();
            }
            return Ok(entries);
        }

        [System.Web.Http.Route("Api/GetUser")]
        [System.Web.Http.HttpGet]
        public IHttpActionResult GetUser(string username,string password)
        {

            password = Encrypt(password);
            IList<UserViewModel> entries = null;
            using (errorkbEntities1 entities = new errorkbEntities1())
            {
                entries = entities.users.Select(e => new UserViewModel()
                {
                    u_id = e.u_id,
                    username = e.username,
                    passwd = e.passwd,
                    privileges = e.privileges
                }
                ).Where(e=> e.username==username && e.passwd == password).ToList<UserViewModel>();
            }
            if (entries.Count == 0)
            {
                return NotFound();
            }
            return Ok(entries);

        }

        [System.Web.Http.Route("Api/PutNewUser")]
        [System.Web.Http.HttpPut]
        public IHttpActionResult PutNewUser(string oldUsername, string newUsername,string newPassword,string newPriv)
        {
            using (errorkbEntities1 entities = new errorkbEntities1())
            {
                if(newPriv == "user" || newPriv == "admin")
                {
                    var existingUser = entities.users.Where(s => s.username == oldUsername).FirstOrDefault();

                    if (existingUser != null)
                    {
                        existingUser.username = newUsername;
                        existingUser.passwd = Encrypt(newPassword);
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
        [System.Web.Http.Route("Api/PutNewUser")]
        [System.Web.Http.HttpPut]
        public IHttpActionResult PutNewUser(string oldUsername, string newUsername, string newPriv)
        {
            using (errorkbEntities1 entities = new errorkbEntities1())
            {
                if (newPriv == "user" || newPriv == "admin")
                {
                    var existingUser = entities.users.Where(s => s.username == oldUsername).FirstOrDefault();

                    if (existingUser != null)
                    {
                        existingUser.username = newUsername;
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
                    password = Encrypt(password);
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
