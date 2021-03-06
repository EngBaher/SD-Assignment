using System;

namespace API.DTOs
{
    public class StepItemToReturnDTO
    {
        public int Id { get; set; }
        public string Titel { get; set; }
        public string Description { get; set; }
        public DateTimeOffset CreationDate { get; set; }
    }
}