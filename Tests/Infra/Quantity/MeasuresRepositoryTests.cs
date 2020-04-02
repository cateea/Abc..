using System;
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
        [TestInitialize]
        public override void TestInitialize()
        {
            base.TestInitialize();
            var options = new DbContextOptionsBuilder<QuantityDbContext>()
                .UseInMemoryDatabase("TestDb")
                .Options;
            var c = new QuantityDbContext(options);
            obj = new MeasuresRepository(c);
        }
        protected override Type GetBaseType()
        {
            return typeof(UniqueEntityRepository<Measure, MeasureData>);
        }

        protected override void TestGetList()
        {
            Assert.Inconclusive();
        }

        protected override string GetId(MeasureData d)=> d.Id;

        protected override Measure GetObject(MeasureData d) => new Measure(d);

        protected override void SetId(MeasureData d, string id) => d.Id = id;
    }
}
