using Abc.Pages.Extensions;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Abc.Tests.Pages.Extensions
{

    [TestClass]
    public class DisplayControlsForHtmlExtensionTests : BaseTests
    {
        [TestInitialize] public virtual void TestIntialize() => type = typeof(DisplayControlsForHtmlExtension);

        [TestMethod]
        public void DisplayControlsForTest()
        {
            Assert.Inconclusive();
        }
    }
}
