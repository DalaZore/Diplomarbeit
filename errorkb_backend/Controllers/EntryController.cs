using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Mvc;
using errorkb_backend.Models;
using ErrorkbDataAccess;
using Google.Protobuf.WellKnownTypes;

namespace Errorkb_backend.Controllers
{

    public class EntryController : ApiController
    {
        [System.Web.Http.Route("Api/PutNewEntry")]
        [System.Web.Http.HttpPut]
        public IHttpActionResult PutNewEntry(int id,string tit, string desc, string stat, string username,string solution, string category, string catdesc)
        {
            using (errorkbEntryEntities entities = new errorkbEntryEntities())
            {
                
                    var existingEntry = entities.entries.Where(s => s.e_id == id).FirstOrDefault();

                    if (existingEntry != null)
                    {
                        existingEntry.title = tit;
                        existingEntry.description = desc;
                        existingEntry.status = stat;
                        existingEntry.user = username;
                        existingEntry.solution = solution;
                        existingEntry.category = category;
                        existingEntry.catdesc = catdesc;

                    entities.SaveChanges();
                    }
                    else
                    {
                        return NotFound();
                    }
                    return Ok();
            }            
        }
        
        
        [System.Web.Http.Route("Api/PostNewEntry")]
        [System.Web.Http.HttpPost]
        public IHttpActionResult PostNewEntry(string tit, string desc, string stat, string username,string solution,string category,string catdesc)
        {
            using (errorkbEntryEntities entities = new errorkbEntryEntities())
            {
                if (stat == "open" || stat == "closed")
                {
                    if (category == "product" || category == "process")
                    {
                        entities.entries.Add(new entry()
                        {
                            title = tit,
                            description = desc,
                            status = stat,
                            user = username,
                            solution = solution,
                            category = category,
                            catdesc = catdesc
                            
                        });
                        entities.SaveChanges();

                        return Ok();
                    }
                    return Content(HttpStatusCode.BadRequest, "Any object");
                }
                else
                {
                    return Content(HttpStatusCode.BadRequest, "Any object");

                }
            }
        }

        [System.Web.Http.Route("Api/GetAllEntries")]
        [System.Web.Http.HttpGet]
        public IHttpActionResult  GetAllEntries()
        {
            IList<EntryViewModel> entries = null;
            using (errorkbEntryEntities entities = new errorkbEntryEntities())
            {
                entries = entities.entries.Select(e => new EntryViewModel()
                    {
                        id = e.e_id,
                        timestamp = e.timestamp,
                        title = e.title,
                        description = e.description,
                        status = e.status,
                        user = e.user,
                        solution = e.solution,
                        category = e.category,
                        catdesc = e.catdesc
                    }
                ).ToList<EntryViewModel>();
            }

            if (entries.Count == 0)
            {
                return NotFound();
            }

            return Ok(entries);
        }
        
        [System.Web.Http.Route("Api/DeleteEntry")]
        [System.Web.Http.HttpDelete]
        public IHttpActionResult DeleteEntry(int id)
        {
            using (errorkbEntryEntities entities = new errorkbEntryEntities())
            {
                var entry = entities.entries.Where(s => s.e_id == id).FirstOrDefault();
                
                if(entry != null)
                {
                    entities.Entry(entry).State = System.Data.Entity.EntityState.Deleted;
                    entities.SaveChanges();
                    return Ok();
                }

                return NotFound();




            }
        }

    }
}
