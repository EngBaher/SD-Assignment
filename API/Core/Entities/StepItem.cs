using System;

namespace API.Core.Entities
{
    public class StepItem : BaseEntity
    {
        public StepItem()
        {
        }

        public StepItem(int stepId, string titel, string description)
        {
            StepId = stepId;
            Titel = titel;
            Description = description;
        }

        public int StepId { get; set; }
        public string Titel { get; set; }
        public string Description { get; set; }
        public DateTimeOffset CreationDate { get; set; } = DateTimeOffset.Now;
    }
}