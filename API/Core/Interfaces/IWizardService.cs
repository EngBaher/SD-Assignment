using System.Collections.Generic;
using System.Threading.Tasks;
using API.Core.Entities;

namespace API.Core.Interfaces
{
    public interface IWizardService
    {
        Task<IReadOnlyList<Step>> GetWizard();
        Task<Step> AddStep();
        Task<StepItem> AddStepItem(int stepId, string titel, string description);
        Task<StepItem> UpdateStepItem(int stepItemId, string titel, string description);

        Task<bool> RemoveStep(int id);
        Task<bool> RemoveStepItem(int id);

    }
}