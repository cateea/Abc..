using System;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection;
using Abc.Data.Common;
using Abc.Domain.Common;
using Microsoft.EntityFrameworkCore;

namespace Abc.Infra {

    public abstract class SortedRepository<TDomain, TData> : BaseRepository<TDomain, TData>, ISorting
        where TData : PeriodData, new()
        where TDomain : Entity<TData>, new() {

        public string SortOrder { get; set; }
        public string DescendingString => "_desc";

        protected SortedRepository(DbContext c, DbSet<TData> s) : base(c, s) { }

        protected internal override IQueryable<TData> CreateSqlQuery() {
            var query = base.CreateSqlQuery();
            query = addSorting(query);

            return query;
        }

        protected internal IQueryable<TData> addSorting(IQueryable<TData> query) {
            var expression = createExpression();

            var r = expression is null ? query : addOrderBy(query, expression);

            return r;
        }

        internal Expression<Func<TData, object>> createExpression() {
            var property = findProperty();

            return property is null ? null : lambdaExpression(property);
        }




        internal Expression<Func<TData, object>> lambdaExpression(PropertyInfo p) {
            var param = Expression.Parameter(typeof(TData), "x");
            var property = Expression.Property(param, p);
            var body = Expression.Convert(property, typeof(object));

            return Expression.Lambda<Func<TData, object>>(body, param);
        }

        internal PropertyInfo findProperty() {
            var name = getName();

            return typeof(TData).GetProperty(name);
        }

        internal string getName() {
            if (string.IsNullOrEmpty(SortOrder)) return string.Empty;
            var idx = SortOrder.IndexOf(DescendingString, StringComparison.Ordinal);

            return idx > 0 ? SortOrder.Remove(idx) : SortOrder;
        }

        internal IQueryable<TData> addOrderBy(IQueryable<TData> query, Expression<Func<TData, object>> e) {
            if (query is null) return null;
            if (e is null) return query;

            try { return isDescending() ? query.OrderByDescending(e) : query.OrderBy(e); }
            catch { return query; }
        }

        internal bool isDescending() => !string.IsNullOrEmpty(SortOrder) && SortOrder.EndsWith(DescendingString);

    }

}