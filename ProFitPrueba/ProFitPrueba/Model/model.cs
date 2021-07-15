using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ProFitPrueba.Model
{
    public class model
    {
        [Key]
        public int Id { get; set; }

        public String name { get; set; }

        public String email { get; set; }

        public String notes { get; set; }
    }
}
