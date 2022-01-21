using DataAccess.Data;
using DataModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Repository.IRepository
{
    public class PersonalRepository : Repository<Personal>, IPersonalRepository
    {
        private readonly ApplicationDbContext _db;
        public PersonalRepository(ApplicationDbContext db) : base(db)
        {
            _db = db;
        }

        public void Update(Personal personal)
        {
            var personalInfo = _db.Personals.FirstOrDefault(e => e.ID == personal.ID);

            if(personalInfo!= null)
            {
                personalInfo.Name = personal.Name;
                personalInfo.FathersName = personal.FathersName;
                personalInfo.MothersName = personal.MothersName;
                personalInfo.Gender = personal.Gender;
                personalInfo.Age = personal.Age;
                personalInfo.DOB = personal.DOB;
            }
            
        }
    }
}
