using System;
using System.Collections.Generic;

namespace API.DTOs
{
    public class StepToReturnDTO
    {
        public int Id { get; set; }
        public IReadOnlyList<StepItemToReturnDTO> StepItems { get; set; }
        public DateTimeOffset CreationDate { get; set; }
    }
}