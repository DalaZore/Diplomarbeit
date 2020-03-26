using System;

namespace errorkb_backend.Models
{
    public class UserViewModel
    {
        public int u_id { get; set; }
        public string username { get; set; }
        public string passwd { get; set; }
        public string privileges { get; set; }
    }
}