﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Abc.Aids;
using Abc.Domain.Common;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace Abc.Pages {

    public abstract class BasePage<TRepository, TDomain, TView, TData> : PageModel
        where TRepository : ICrudMethods<TDomain>, ISorting, IFiltering, IPaging {

        private TRepository db;

        protected internal BasePage(TRepository r) {
            db = r;
        }

        [BindProperty]
        public TView Item { get; set; }
        public IList<TView> Items { get; set; }
        public abstract string ItemId { get; }

        public string PageTitle { get; set; }
        public string PageSubTitle => getPageSubTitle();
        public string FixedFilter { 
            get=> db.FixedFilter;
            set=> db.FixedFilter = value; }
        public string FixedValue {
            get => db.FixedValue;
            set => db.FixedValue = value; }
        public string SortOrder{ 
            get=> db.SortOrder;
            set => db.SortOrder = value; 
            }
        public string SearchString { 
            get=> db.SearchString;
            set=> db.SearchString = value; }

        public int PageIndex {
            get => db.PageIndex;
            set => db.PageIndex = value;
        }
        public bool HasPreviousPage => db.HasPreviousPage;
        public bool HasNextPage => db.HasNextPage;

        public int TotalPages => db.TotalPages;
        public string IndexUrl => getIndexUrl();

        public string PageUrl => getPageUrl();

        protected internal abstract string getPageUrl();
        protected internal string getIndexUrl() {
            return $"{PageUrl}/Quantity/Measures/Index?fixedFilter={FixedFilter}&fixedValue={FixedValue}";
        }

        protected internal virtual string getPageSubTitle() {
            return string.Empty;
        }
        protected internal async Task<bool> addObject(string fixedFilter, string fixedValue) {
            FixedFilter = fixedFilter;
            FixedValue = fixedValue;
            //TODO see viga tuleb lahendada
            // To protect from overposting attacks, please enable the specific properties you want to bind to, for
            // more details see https://aka.ms/RazorPagesCRUD.

            try {
                if (!ModelState.IsValid) return false;
                await db.Add(toObject(Item));
            }
            catch { return false; }

            return true;
        }

        protected internal abstract TDomain toObject(TView view);

        protected internal async Task updateObject(string fixedFilter, string fixedValue) {
            FixedFilter = fixedFilter;
            FixedValue = fixedValue;
            //TODO see viga tuleb lahendada
            // To protect from overposting attacks, please enable the specific properties you want to bind to, for
            // more details see https://aka.ms/RazorPagesCRUD.

            await db.Update(toObject(Item));
        }

        protected internal async Task getObject(string id, string fixedFilter, string fixedValue)
        {
            FixedFilter = fixedFilter;
            FixedValue = fixedValue;
            var o = await db.Get(id);
            Item = toView(o);
        }

        protected internal abstract TView toView(TDomain obj);

        protected internal async Task deleteObject(string id, string fixedFilter, string fixedValue)
        {
            FixedFilter = fixedFilter;
            FixedValue = fixedValue;
            await db.Delete(id);
        }

        public string GetSortString(Expression<Func<TData, object>> e, string page) {
            var name = GetMember.Name(e);
            string sortOrder;
            if (string.IsNullOrEmpty(SortOrder)) sortOrder = name;
            else if (!SortOrder.StartsWith(name)) sortOrder = name;
            else if (SortOrder.EndsWith("_desc")) sortOrder = name;
            else sortOrder = name + "_desc";

            return $"{page}?sortOrder={sortOrder}&currentFilter={SearchString}" 
                   +$"&fixedFilter={FixedFilter}&fixedValue={FixedValue}";
        }

        protected internal async Task getList(string sortOrder, string currentFilter, string searchString,
            int? pageIndex, string fixedFilter, string fixedValue) {

            FixedFilter = fixedFilter;
            FixedValue = fixedValue;
            SortOrder = sortOrder;
            SearchString = getSearchString(searchString, sortOrder, currentFilter);
            PageIndex = pageIndex ?? 1;

            Items = await getList();
        }
        private string getSearchString(string currentFilter, string searchString, string sortOrder) {
            if (searchString != null) { PageIndex = 1; }
            else { searchString = currentFilter; }
            return searchString;
        }
        internal async Task<List<TView>> getList() { 
            var l = await db.Get();
            return l.Select(toView).ToList();
        }

    }

}
