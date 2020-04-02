using Abc.Data.Quantity;
using Abc.Domain.Common;

namespace Abc.Domain.Quantity
{
    public sealed class Measure: Entity<MeasureData>
    {
        public Measure(): this(null) { }
        public Measure(MeasureData data) : base(data) { }
    }
}
