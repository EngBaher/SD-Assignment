using API.Core.Entities;
using AutoMapper;
using API.Core.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using API.DTOs;
using System.Collections.Generic;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[Controller]")]
    public class WizardController : ControllerBase
    {
        private readonly IWizardService _wizardService;
        private readonly IMapper _mapper;

        public WizardController(IWizardService wizardService,
          IMapper mapper)
        {
            _wizardService = wizardService;
            _mapper = mapper;
        }


        [HttpGet]
        public async Task<ActionResult<IReadOnlyList<StepToReturnDTO>>> GetWizard()
        {

            var steps = await _wizardService.GetWizard();

            var data = _mapper
                .Map<IReadOnlyList<Step>, IReadOnlyList<StepToReturnDTO>>(steps);

            return Ok(data);
        }

        [HttpPost("step")]
        public async Task<ActionResult<StepToReturnDTO>> AddStep()
        {

            var step = await _wizardService.AddStep();

            var data = _mapper
                .Map<Step, StepToReturnDTO>(step);

            return Ok(data);
        }

        [HttpPost("step/{stepId}/addStepItem")]
        public async Task<ActionResult<StepToReturnDTO>> AddStepItem(int stepId, StepItemDTO stepItem)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var result = await _wizardService.AddStepItem(stepId, stepItem.Titel, stepItem.Description);

            var data = _mapper
                .Map<StepItem, StepItemToReturnDTO>(result);

            return Ok(data);
        }

        [HttpPost("stepItem/{id}/update")]
        public async Task<ActionResult<StepItemToReturnDTO>> UpdateStepItem(int id, StepItemDTO stepItem)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var result = await _wizardService.UpdateStepItem(id, stepItem.Titel, stepItem.Description);

            var data = _mapper
                .Map<StepItem, StepItemToReturnDTO>(result);

            return Ok(data);
        }

        [HttpDelete("stepItem")]
        public async Task<ActionResult<bool>> RemoveStepItem(int id)
        {
            var result = await _wizardService.RemoveStepItem(id);

            return Ok(result);
        }

        [HttpDelete("step")]
        public async Task<ActionResult<bool>> RemoveStep(int id)
        {
            var result = await _wizardService.RemoveStep(id);

            return Ok(result);
        }

    }
}