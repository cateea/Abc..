using System;
using System.Threading;
using Abc.Aids;
using Abc.Data.Quantity;
using Abc.Domain.Quantity;
using Abc.Infra;
using Abc.Infra.Quantity;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Abc.Tests.Infra.Quantity
{
    [TestClass] 
    public class MeasuresRepositoryTests : RepositoryTests<IMeasuresRepository, Measure, MeasureData>
    {
        private QuantityDbContext db;
        private int count;
        [TestInitialize]
        public override void TestInitialize()
        {
            base.TestInitialize();
            var options = new DbContextOptionsBuilder<QuantityDbContext>()
                .UseInMemoryDatabase("TestDb")
                .Options;
            db = new QuantityDbContext(options);
            obj = new MeasuresRepository(db);
            foreach (var p in db.Measures)
                db.Entry(p).State = EntityState.Deleted;
            count = GetRandom.UInt8(20, 40);
            addItems();
        }

        private void addItems()
        {
            for (var i = 0; i < count; i++)
                obj.Add(new Measure(GetRandom.Object<MeasureData>())).GetAwaiter();
        }
        protected override Type GetBaseType()
        {
            return typeof(UniqueEntityRepository<Measure, MeasureData>);
        }

        protected override void TestGetList()
        {
            obj.PageIndex = GetRandom.Int32(2, obj.TotalPages - 1);
            var l = obj.Get().GetAwaiter().GetResult();
            Assert.AreEqual(obj.PageSize, l.Count);
        }

        protected override string GetId(MeasureData d)=> d.Id;

        protected override Measure GetObject(MeasureData d) => new Measure(d);

        protected override void SetId(MeasureData d, string id) => d.Id = id;
    }
}
