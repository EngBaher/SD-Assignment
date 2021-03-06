using System;
using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class StepItemDTO
    {
        [Required]
        public string Titel { get; set; }
        public string Description { get; set; }

    }
}