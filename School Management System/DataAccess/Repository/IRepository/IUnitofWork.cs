using DataAccess.Repository.IRepository;
using System;
using System.Collections.Generic;
using System.Text;

namespace DataAccess.Repository.IRepository
{
    public interface IUnitofWork: IDisposable
    {
        IPersonalRepository Personal { get; }
        ISP_Call  SP_Call { get; }
        void Save();
    }
}
