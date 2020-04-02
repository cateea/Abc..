using Abc.Data.Common;
using Abc.Data.Quantity;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Abc.Tests.Data.Quantity
{
    [TestClass]
    public class CommonTermDataTests : AbstractClassTests<CommonTermData, PeriodData>
    {
        private class TestClass : CommonTermData { }
        [TestInitialize]
        public override void TestInitialize()
        {
            base.TestInitialize();
            obj = new TestClass();
        }

        [TestMethod] public void MasterIdTest()
        {
            isNullableProperty(()=>obj.MasterId, x=> obj.MasterId = x);
        }

        [TestMethod] public void TermIdTest()
        {
            isNullableProperty(() => obj.TermId, x=> obj.TermId = x);
        }

        [TestMethod]
        public void PowerTest()
        {
            isProperty(() => obj.Power, x => obj.Power = x);
        }
    }
}
