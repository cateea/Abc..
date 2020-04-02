using Abc.Facade.Common;
using Abc.Facade.Quantity;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Abc.Tests.Facade.Quantity
{
    [TestClass]
    public class UnitViewTests: SealedClassTests<UnitView, DefinedView>
    {

        [TestMethod] public void MeasureIdTest() {
            isNullableProperty(()=>obj.MeasureId, x=> obj.MeasureId=x);
        }
    }
}
