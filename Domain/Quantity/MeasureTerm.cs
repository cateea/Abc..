using Abc.Data.Quantity;
using Abc.Domain.Common;

namespace Abc.Domain.Quantity
{
    public sealed class MeasureTerm : Entity<MeasureTermData>
    {
        public MeasureTerm() : this(null) { }
        public MeasureTerm(MeasureTermData data) : base(data) { }
    }
}
