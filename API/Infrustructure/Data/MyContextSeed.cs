using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text.Json;
using System.Threading.Tasks;
using API.Core.Entities;
using Microsoft.Extensions.Logging;

namespace API.Infrustructure.Data
{
    public class MyContextSeed
    {
        public static async Task SeedAsync(MyContext context, ILoggerFactory loggerFactory)
        {
            try
            {

                if (!context.Steps.Any())
                {
                    var stepsData =
                        File.ReadAllText(@"Infrustructure/Data/SeedData/wizard.json");

                    var steps = JsonSerializer.Deserialize<List<Step>>(stepsData);

                    foreach (var item in steps)
                    {
                        context.Steps.Add(item);
                    }

                    await context.SaveChangesAsync();
                }

            }
            catch (Exception ex)
            {
                var logger = loggerFactory.CreateLogger<MyContextSeed>();
                logger.LogError(ex.Message);
            }
        }
    }
}