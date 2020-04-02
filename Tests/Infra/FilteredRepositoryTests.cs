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
    public class FilteredRepositoryTests : AbstractClassTests<FilteredRepository<Measure, MeasureData>,
        SortedRepository<Measure, MeasureData>>
    {

        private class TestClass : FilteredRepository<Measure, MeasureData>
        {

            public TestClass(DbContext c, DbSet<MeasureData> s) : base(c, s) { }

            protected internal override Measure toDomainObject(MeasureData d) => new Measure(d);

            protected override async Task<MeasureData> getData(string id)
            {
                return await dbSet.FirstOrDefaultAsync(m => m.Id == id);
            }

            protected override string GetId(Measure entity) => entity?.Data?.Id;

        }

        [TestInitialize]
        public override void TestInitialize()
        {
            base.TestInitialize();

            var options = new DbContextOptionsBuilder<QuantityDbContext>()
                .UseInMemoryDatabase("TestDb")
                .Options;
            var c = new QuantityDbContext(options);
            obj = new TestClass(c, c.Measures);
        }

        [TestMethod] public void SearchStringTest()
            => isNullableProperty(() => obj.SearchString, x => obj.SearchString = x);

        [TestMethod] public void FixedFilterTest()
            => isNullableProperty(() => obj.FixedFilter, x => obj.FixedFilter = x);

        [TestMethod] public void FixedValueTest()
            => isNullableProperty(() => obj.FixedValue, x => obj.FixedValue = x);

        [TestMethod] public void CreateSqlQueryTest()
        {
            var sql = obj.CreateSqlQuery();
            Assert.IsNotNull(sql);
        }

        [TestMethod] public void AddFixedFilteringTest()
        {
            var sql = obj.CreateSqlQuery();
            var fixedFilter = GetMember.Name<MeasureData>(x => x.Definition);
            obj.FixedFilter = fixedFilter;
            var fixedValue = GetRandom.String();
            obj.FixedValue = fixedValue;
            var sqlNew = obj.AddFixedFiltering(sql);
            Assert.IsNotNull(sqlNew);
        }

        [TestMethod]
        public void CreateFixedWhereExpressionTest()
        {
            var properties = typeof(MeasureData).GetProperties();
            var idx = GetRandom.Int32(0, properties.Length);
            var p = properties[idx];
            obj.FixedFilter = p.Name;
            var fixedValue = GetRandom.String();
            obj.FixedValue = fixedValue;
            var e = obj.CreateFixedWhereExpression();
            Assert.IsNotNull(e);
            var s = e.ToString();

            var expected = p.Name;
            if (p.PropertyType != typeof(string))
                expected += ".ToString()";
            expected += $".Contains(\"{fixedValue}\")";
            Assert.IsTrue(s.Contains(expected));
        }

        [TestMethod]
        public void CreateFixedWhereExpressionOnFixedFilterNullTest()
        {
            Assert.IsNull(obj.CreateFixedWhereExpression());
            obj.FixedValue = GetRandom.String();
            obj.FixedFilter = GetRandom.String();
            Assert.IsNull(obj.CreateFixedWhereExpression());
        }

        [TestMethod]
        public void AddFilteringTest()
        {
            var sql = obj.CreateSqlQuery();
            var searchString = GetRandom.String();
            obj.SearchString = searchString;
            var sqlNew = obj.AddFiltering(sql);
            Assert.IsNotNull(sqlNew);
        }

        [TestMethod]
        public void CreateWhereExpressionTest()
        {
            var searchString = GetRandom.String();
            obj.SearchString = searchString;
            var e = obj.CreateWhereExpression();
            Assert.IsNotNull(e);
            var s = e.ToString();

            foreach (var p in typeof(MeasureData).GetProperties())
            {
                var expected = p.Name;
                if (p.PropertyType != typeof(string))
                    expected += ".ToString()";
                expected += $".Contains(\"{searchString}\")";
                Assert.IsTrue(s.Contains(expected));
            }
        }
        [TestMethod]
        public void CreateWhereExpressionWithNullSearchStringTest()
        {
            obj.SearchString = null;
            var e = obj.CreateWhereExpression();
            Assert.IsNull(e);
        }

    }

}