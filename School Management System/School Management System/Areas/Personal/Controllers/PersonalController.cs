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

namespace School_Management_System.Areas.Personal.Controllers
{
    [Area("Personal")]
    public class PersonalController : Controller
    {
        private readonly ILogger<PersonalController> _logger;

        private readonly IUnitofWork _unitOfWork;
        public PersonalController(IUnitofWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public PersonalController(ILogger<PersonalController> logger)
        {
            _logger = logger;
        }

        public IActionResult GetInfo()
        {
            var GetPersonalInfo = _unitOfWork.Personals.FirstOrDefault();

            return View(GetPersonalInfo);
        }

    }
}
