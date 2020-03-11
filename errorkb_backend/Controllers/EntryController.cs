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

    public class EntryController : ApiController
    {
        [System.Web.Http.Route("Api/PostNewEntry")]
        [System.Web.Http.HttpPost]
        public IHttpActionResult PostNewEntry(string tit, string desc, string stat, string username)
        {
            using (errorkbEntryEntities entities = new errorkbEntryEntities())
            {
                if (stat == "open" || stat == "closed")
                {
                    entities.entries.Add(new entry()
                    {
                        title = tit,
                        description = desc,
                        status = stat,
                        user = username
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

        [System.Web.Http.Route("Api/GetAllEntries")]
        [System.Web.Http.HttpGet]
        public IEnumerable<entry> GetAllEntries(string tit, string desc, string stat, string username)
        {
            using (errorkbEntryEntities entities = new errorkbEntryEntities())
            {
                return entities.entries.ToList();
            }
        }

    }
}
