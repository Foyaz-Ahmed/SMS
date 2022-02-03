using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataModels
{
    public  class Student
    {
        public int StudentId { get; set; }
        public string Name { get; set; }
        public int PersonalId { get; set; }
        public int EducationId { get; set; }
        public int DepartmentId { get; set; }
        public int ClassId { get; set; }
        public int RollNumber { get; set; }
        public int MaritalStatus { get; set; }
        public int Status { get; set; }
    }
}
