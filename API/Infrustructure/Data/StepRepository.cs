using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Core.Entities;
using API.Core.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace API.Infrustructure.Data
{
    public class StepRepository : GenericRepository<Step>, IStepRepository
    {

        private readonly MyContext _context;
        public StepRepository(MyContext context) : base(context)
        {
            _context = context;
        }

        public async Task<IReadOnlyList<Step>> GetStepsAsync()
        {
            return await _context.Steps
            .Include(s => s.StepItems).ToListAsync();
        }


    }
}