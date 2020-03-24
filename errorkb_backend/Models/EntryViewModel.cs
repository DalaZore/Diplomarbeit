using System;

namespace errorkb_backend.Models
{
    public class EntryViewModel
    {
        public int id { get; set; }
        public DateTime timestamp { get; set; }
        public string title { get; set; }
        public string description { get; set; }
        public string status { get; set; }
        public string user { get; set; }
        public string solution { get; set; }
        
    }
}