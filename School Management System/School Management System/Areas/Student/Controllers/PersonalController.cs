using DataModels.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using DataModels;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using DataAccess.Repository.IRepository;
using DataAccess.Repository;
using DataAccess.Data;

namespace School_Management_System.Areas.Personal.Controllers
{
    [Area("Student")]
    public class PersonalController : Controller
    {

        private readonly ApplicationDbContext _db;
        public PersonalController(ApplicationDbContext db)
        {
            _db = db;
        }

        public IActionResult PersonalInfo()
        {

            var personalInfo = _db.Personals.ToList();

            var data = new
            {
                Items = personalInfo,
                TotalCount = personalInfo.Count

            };


            return Json(data);
           
        }
        public IActionResult Index()
        {

            return View();
        }

    }
}
