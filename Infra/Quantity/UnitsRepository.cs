﻿using Abc.Data.Quantity;
using Abc.Domain.Quantity;

namespace Abc.Infra.Quantity {

    public class UnitsRepository : UniqueEntityRepository<Unit, UnitData>, IUnitsRepository {

        public UnitsRepository(QuantityDbContext c) : base(c, c.Units) { }

        protected internal override Unit toDomainObject(UnitData d) {
            return new Unit(d);
        }
        

    }

}
