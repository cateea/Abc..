using Abc.Aids;
using Abc.Domain.Quantity;

namespace Abc.Facade.Quantity
{
    public static class MeasureViewFactory
    {

        public static Measure Create(MeasureView v) {
            var o = new Measure();
            Copy.Members(v, o.Data);
            //o.Data.Id = v.Id;
            //o.Data.Code = v.Code;
            //o.Data.Name = v.Name;
            //o.Data.Definition = v.Definition;
            //o.Data.ValidFrom = v.ValidFrom;
            //o.Data.ValidTo = v.ValidTo;

            return o;
        }

        public static MeasureView Create(Measure o) {
            var v = new MeasureView();
            Copy.Members(o.Data, v);
            //v.Id = o.Data.Id;
            //v.Code = o.Data.Code;
            //v.Name = o.Data.Name;
            //v.Definition = o.Data.Definition;
            //v.ValidFrom = o.Data.ValidFrom;
            //v.ValidTo = o.Data.ValidTo;

            return v;
        }
    }
}
