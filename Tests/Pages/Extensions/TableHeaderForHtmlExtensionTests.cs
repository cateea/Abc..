using Abc.Pages.Extensions;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Abc.Tests.Pages.Extensions
{
    [TestClass]
    public class TableHeaderForHtmlExtensionTests : BaseTests
    {
        [TestInitialize] public virtual void TestIntialize() => type = typeof(TableHeaderForHtmlExtension);

        [TestMethod]
        public void TableHeaderForTest()
        {
            Assert.Inconclusive();
        }
    }
}