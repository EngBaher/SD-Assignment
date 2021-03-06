using API.Core.Entities;
using API.DTOs;
using AutoMapper;

namespace API.Helpers
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Step, StepToReturnDTO>();
            CreateMap<StepItem, StepItemToReturnDTO>();

            CreateMap<StepDTO, Step>();
            CreateMap<StepItemDTO, StepItem>();
        }
    }
}