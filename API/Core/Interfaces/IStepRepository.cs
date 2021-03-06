using System.Collections.Generic;
using System.Threading.Tasks;
using API.Core.Entities;

namespace API.Core.Interfaces
{
    public interface IStepRepository : IGenericRepository<Step>
    {
        Task<IReadOnlyList<Step>> GetStepsAsync();
    }
}