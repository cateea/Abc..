using Abc.Facade.Common;
using Abc.Facade.Quantity;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Abc.Tests.Facade.Quantity
{
    [TestClass]
    public class UnitFactorViewTests : SealedClassTests<UnitFactorView, PeriodView>
    {
        [TestMethod] public void UnitIdTest() => isNullableProperty(() => obj.UnitId, x => obj.UnitId = x);
        [TestMethod] public void SystemOfUnitsIdTest() => isNullableProperty(() => obj.SystemOfUnitsId, x => obj.SystemOfUnitsId = x);
        [TestMethod] public void FactorTest() => isProperty(() => obj.Factor, x => obj.Factor = x);
    }
}
