using System;
using System.Collections.Generic;

namespace API.Core.Entities
{
    public class Step : BaseEntity
    {
        public DateTimeOffset CreationDate { get; set; } = DateTimeOffset.Now;
        public IReadOnlyList<StepItem> StepItems { get; set; }
    }
}