using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace DemoAngular2017.Controllers
{
    public class AboutController : Controller
    {
        [Route("About/Landing")]
        public IActionResult Index()
        {
            return View();
        }
    }
}