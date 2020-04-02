using Abc.Aids;
using Abc.Data.Quantity;
using Abc.Domain.Quantity;
using Abc.Facade.Quantity;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Abc.Tests.Facade.Quantity
{
    [TestClass]
    public class UnitFactorViewFactoryTests : BaseTests
    {

        [TestInitialize]
        public virtual void TestInitialize()
        {
            type = typeof(UnitFactorViewFactrory);
        }

        [TestMethod]
        public void CreateTest() { }

        [TestMethod]
        public void CreateObjectTest()
        {
            var view = GetRandom.Object<UnitFactorView>();
            var data = UnitFactorViewFactrory.Create(view).Data;

            testArePropertyValuesEqual(view, data);

        }

        [TestMethod]
        public void CreateViewTest()
        {
            var data = GetRandom.Object<UnitFactorData>();
            var view = UnitFactorViewFactrory.Create(new UnitFactor(data));

            testArePropertyValuesEqual(view, data);

        }

    }
}