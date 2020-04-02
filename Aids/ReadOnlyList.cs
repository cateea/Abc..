using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;

namespace Abc.Aids {

    public class ReadOnlyList<T> : ReadOnlyCollection<T> {

        private readonly List<T> collection;

        private readonly Func<T, T, bool> constraint;

        public ReadOnlyList(List<T> list, Func<T, T, bool> uniquenessCondition) : base(list) {
            collection = list;
            constraint = uniquenessCondition;
        }

        public bool Add(T item) {
            if (isNull(item)) return false;
            if (inCollection(getItem(item))) return false;
            collection.Add(item);

            return true;
        }

        public bool Remove(T item) {
            if (isNull(item)) return false;
            var e = getItem(item);

            if (!inCollection(e)) return false;
            collection.Remove(e);

            return true;
        }

        public bool Update(T item) => Remove(item) && Add(item);

        internal bool isNull(T item) => item == null;

        internal bool inCollection(T item) => !isNull(item);

        internal T getItem(T item) => collection.Find(x => constraint(x, item));
    }

}
