using DataModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Repository.IRepository
{
    public  interface IPersonalRepository:IRepository<Personal>
    {

        void Update(Personal personal);
        
    }
}
