using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Abc.Infra.Quantity;

namespace Abc.Soft.Data
{
    public class ApplicationDbContext : IdentityDbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder) {
            base.OnModelCreating(builder);
            initializeTables(builder);
        }

        internal void initializeTables(ModelBuilder builder) {
            QuantityDbContext.InitializeTables(builder);
        }

    }
}
