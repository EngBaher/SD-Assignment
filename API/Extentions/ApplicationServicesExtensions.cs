using API.Core.Interfaces;
using API.Infrustructure.Data;
using API.Infrustructure.Services;
using Microsoft.Extensions.DependencyInjection;

namespace API.Extentions
{
    public static class ApplicationServicesExtensions
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services)
        {
            services.AddScoped<IWizardService, WizardService>();
            //services.AddScoped<IUnitOfWork, UnitOfWork>();
            services.AddScoped<IStepRepository, StepRepository>();
            services.AddScoped(typeof(IGenericRepository<>), (typeof(GenericRepository<>)));


            return services;
        }

    }
}