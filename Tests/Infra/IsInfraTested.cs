using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Abc.Tests.Infra
{
    [TestClass]
    public class IsInfraTested : AssemblyTests
    {
        private const string Assembly = "Abc.Infra";

        protected override string Namespace(string name)
        {
            return $"{Assembly}.{name}";
        }

        [TestMethod] public void IsQuantityTested()
        {
            isAllTested(Assembly, Namespace("Quantity"));
        }

        [TestMethod] public void IsTested()
        {
            isAllTested(base.Namespace("Infra"));
        }

    }
}
