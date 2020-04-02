using Abc.Data.Quantity;
using Abc.Domain.Quantity;
using Abc.Aids;

namespace Abc.Facade.Quantity
{
    public static class UnitTermViewFactory
    {
        public static UnitTerm Create(UnitTermView view)
        {
            var d = new UnitTermData();
            Copy.Members(view, d);
            return  new UnitTerm(d);
        }

        internal static UnitTermView Create(UnitTerm obj)
        {
            var v = new UnitTermView();
            Copy.Members(obj.Data, v);
            return v;
        }
    }
}
