using System.Collections.Generic;
using System.Threading.Tasks;
using API.Core.Entities;
using API.Core.Interfaces;

namespace API.Infrustructure.Services
{

    public class WizardService : IWizardService
    {
        private readonly IStepRepository _stepRepo;
        private readonly IGenericRepository<StepItem> _stepItemRepo;

        public WizardService(IGenericRepository<StepItem> stepItemRepo,
         IStepRepository stepRepo)
        {
            _stepRepo = stepRepo;
            _stepItemRepo = stepItemRepo;
        }

        public async Task<Step> AddStep()
        {
            // Create a Step
            var step = new Step();
            // save to db
            var result = await _stepRepo.Add(step);

            if (result <= 0) return null;

            // return Step
            return step;


        }

        public async Task<StepItem> AddStepItem(int stepId, string titel, string description)
        {
            // Create a StepItem
            var stepItem = new StepItem(stepId, titel, description);
            // save to db
            var result = await _stepItemRepo.Add(stepItem);

            if (result <= 0) return null;

            // return Step
            return stepItem;
        }

        public async Task<IReadOnlyList<Step>> GetWizard()
        {
            return await _stepRepo.GetStepsAsync();
        }

        public async Task<bool> RemoveStep(int id)
        {
            var step = await _stepRepo.GetByIdAsync(id);
            if (step == null)
                return false;
            return await _stepRepo.Delete(step) > 0;
        }

        public async Task<bool> RemoveStepItem(int id)
        {
            var stepItem = await _stepItemRepo.GetByIdAsync(id);
            if (stepItem == null)
                return false;
            return await _stepItemRepo.Delete(stepItem) > 0;
        }

        public async Task<StepItem> UpdateStepItem(int stepItemId, string titel, string description)
        {
            // get a StepItem
            var stepItem = await _stepItemRepo.GetByIdAsync(stepItemId);

            // check if Exist
            if (stepItem == null)
                return null;

            // update it    
            stepItem.Titel = titel;
            stepItem.Description = description;

            // save to db
            var result = await _stepItemRepo.Update(stepItem);
            if (result <= 0) return null;

            // return Step
            return stepItem;

        }
    }
}