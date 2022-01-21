using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataModels
{
    public  class Personal
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string FathersName { get; set; }
        public string MothersName { get; set; }
        public string Gender { get; set; }
        public Nullable<int> Age { get; set; }
        public string Address { get; set; }
        public Nullable<System.DateTime> DOB { get; set; }
    }
}

