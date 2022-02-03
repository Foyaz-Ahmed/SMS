using DataModels.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using DataModels;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using DataAccess.Data;

namespace School_Management_System.Areas.Student.Controllers
{
    [Area("Student")]
    public class StudentController : Controller
    {
        private readonly ApplicationDbContext _db;

        public StudentController(ApplicationDbContext db)
        {
            _db = db;
        }

        public IActionResult StudentInfo()
        {

            var studentInfo = _db.Students.ToList();

            var data = new
            {
                Items = studentInfo,
                TotalCount = studentInfo.Count

            };

            return Json(data);

        }

        public IActionResult Index()
        {

            return View();
        }


    }
}
