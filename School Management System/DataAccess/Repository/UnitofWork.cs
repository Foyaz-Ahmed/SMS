using DataAccess.Data;
using DataAccess.Repository.IRepository;
using DataModels;
using DataModels.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;

namespace DataAccess.Repository
{
    public class UnitofWork: IUnitofWork
    {
        private readonly ApplicationDbContext _db;

        public UnitofWork(ApplicationDbContext db)
        {
            _db = db;
            SP_Call = new SP_Call(_db);
            Personal = new PersonalRepository(_db);

        }
        public IPersonalRepository Personal { get; private set; }
        
        public ISP_Call SP_Call { get; private set; }

        public void Dispose()
        {
            _db.Dispose();
        }

        public void Save()
        {
            _db.SaveChanges();
        }

    }
}
