using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProFitPrueba.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProFitPrueba.Controllers
{
    
    [Route("api/[controller]")]
    [ApiController]
    public class FptController : ControllerBase
    {
        private readonly Repository repository;

           public FptController()
        {
            repository = new Repository();
        }
        [HttpGet]
        [EnableCors("AllowOrigin")]
        public IEnumerable<model> ListOfCustomer()
        {
            return repository.GetAll();
        }
        [EnableCors("MyPolicy")]
        [HttpPost]
        
        public void AddCustomer([FromBody] model m)
        {
            if (ModelState.IsValid)
            {
                repository.Add(m);
            }
        }
        [HttpDelete]
        [EnableCors("MyPolicy")]
        public void DeleteCustomer(int id)
        {
            repository.DeleteById(id);
        }

    }
}
