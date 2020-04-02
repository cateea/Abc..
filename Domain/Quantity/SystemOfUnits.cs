using Abc.Data.Quantity;
using Abc.Domain.Common;

namespace Abc.Domain.Quantity
{
    public sealed class SystemOfUnits : Entity<SystemOfUnitsData>
    {
        public SystemOfUnits() : this(null) { }
        public SystemOfUnits(SystemOfUnitsData data) : base(data) { }
    }
}
