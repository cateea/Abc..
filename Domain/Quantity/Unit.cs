using Abc.Data.Quantity;
using Abc.Domain.Common;

namespace Abc.Domain.Quantity
{
    public sealed class Unit: Entity<UnitData>
    {
        public Unit() : this(null) { }
        public Unit(UnitData d): base(d) { }
    }
}
