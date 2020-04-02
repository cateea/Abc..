using System;
using System.Threading.Tasks;
using Abc.Aids;
using Abc.Data.Quantity;
using Abc.Domain.Quantity;
using Abc.Infra;
using Abc.Infra.Quantity;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Abc.Tests.Infra
{
    [TestClass]
    public class PaginatedRepositoryTests : AbstractClassTests<PaginatedRepository<Measure, MeasureData>,
        FilteredRepository<Measure, MeasureData>>
    {
        private class TestClass : PaginatedRepository<Measure, MeasureData>
        {

            public TestClass(DbContext c, DbSet<MeasureData> s) : base(c, s) { }

            protected internal override Measure toDomainObject(MeasureData d) => new Measure(d);

            protected override async Task<MeasureData> getData(string id)
                => await dbSet.FirstOrDefaultAsync(m => m.Id == id);

            protected override string GetId(Measure entity) => entity?.Data?.Id;
        }

        private byte count;

        [TestInitialize]
        public override void TestInitialize()
        {
            base.TestInitialize();

            var options = new DbContextOptionsBuilder<QuantityDbContext>()
                .UseInMemoryDatabase("TestDb")
                .Options;
            var c = new QuantityDbContext(options);
            obj = new TestClass(c, c.Measures);
            count = GetRandom.UInt8(20, 40);
            foreach (var p in c.Measures)
                c.Entry(p).State = EntityState.Deleted;
            AddItems();
        }

        [TestMethod] public void PageIndexTest()
        {
            isProperty(() => obj.PageIndex, x => obj.PageIndex = x);
        }

        [TestMethod] public void TotalPagesTest()
        {
            var expected = (int) Math.Ceiling(count / (double) obj.PageSize);
            var totalPagesCount = obj.TotalPages;
            Assert.AreEqual(expected, totalPagesCount);
        }

        [TestMethod] public void HasNextPage()
        {
            void TestNextPage(int pageIndex, bool expected)
            {
                obj.PageIndex = pageIndex;
                var actual = obj.HasNextPage;
                Assert.AreEqual(expected, actual);
            }
            TestNextPage(0, true);
            TestNextPage(1, true);
            TestNextPage(GetRandom.Int32(2, obj.TotalPages-1), true);
            TestNextPage(obj.TotalPages, false);
        }

        [TestMethod] public void HasPreviousPageTest()
        {
            void TestPreviousPage(int pageIndex, bool expected)
            {
                obj.PageIndex = pageIndex;
                var actual = obj.HasPreviousPage;
                Assert.AreEqual(expected, actual);
            }
            TestPreviousPage(0, false);
            TestPreviousPage(1, false);
            TestPreviousPage(2, true);
            TestPreviousPage(GetRandom.Int32(2, obj.TotalPages), true);
            TestPreviousPage(obj.TotalPages, true);
        }

        [TestMethod] public void PageSizeTest()
        {
            Assert.AreEqual(5, obj.PageSize);
            isProperty(() => obj.PageSize, x => obj.PageSize = x);
        }

        [TestMethod] public void GetTotalPagesTest()
        {
            var expected = (int)Math.Ceiling(count / (double)obj.PageSize);
            var totalPagesCount = obj.GetTotalPages(obj.PageSize);
            Assert.AreEqual(expected, totalPagesCount);
        }

        [TestMethod] public void CountTotalPagesTest() 
        {
            var expected = (int)Math.Ceiling(count / (double)obj.PageSize);
            var totalPagesCount = obj.CountTotalPages(count, obj.PageSize);
            Assert.AreEqual(expected, totalPagesCount);
        }

        [TestMethod] public void GetItemsCount()
        {
            var itemsCount = obj.GetItemsCount();
            Assert.AreEqual(0, itemsCount);
        }

        private void AddItems()
        {
            for (var i = 0; i < count; i++)
                obj.Add(new Measure(GetRandom.Object<MeasureData>())).GetAwaiter();
        }

        [TestMethod] public void CreateSqlQueryTest()
        {
            var o = obj.CreateSqlQuery();
            Assert.IsNotNull(o);
        }

        [TestMethod] public void AddSkipAndTakeTest()
        {
            var sql = obj.CreateSqlQuery();

            var o = obj.AddSkipAndTake(sql);
            Assert.IsNotNull(o);
        }
   }

}