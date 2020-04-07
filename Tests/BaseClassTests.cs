using System;
using Abc.Aids;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Abc.Tests {

    public abstract class BaseClassTests<TClass, TBaseClass> : BaseTests {

        protected TClass obj;

        [TestInitialize] public virtual void TestInitialize() {
            type = typeof(TClass);
        }

        [TestMethod] public void IsInheritedTest() {
            Assert.AreEqual(typeof(TBaseClass), type.BaseType);
        }

        protected virtual Type GetBaseClass()
        {
            return typeof(TBaseClass);
        }

        protected static void isNullableProperty<T>(Func<T> get, Action<T> set) {
            isProperty(get, set);
            set(default);
            Assert.IsNull(get());
        }

        protected static void isProperty<T>(Func<T> get, Action<T> set) {
            var d = (T) GetRandom.Value(typeof(T));
            Assert.AreNotEqual(d, get());
            set(d);
            Assert.AreEqual(d, get());
        }

        protected static void isReadOnlyProperty(object o, string name, object expected) {
            var property = o.GetType().GetProperty(name);
            Assert.IsNotNull(property);
            Assert.IsFalse(property.CanWrite);
            Assert.IsTrue(property.CanRead);
            var actual = property.GetValue(o);
            Assert.AreEqual(expected, actual);
        }

        protected static void isNullableProperty(object o, string name, Type type)
        {
            var property = o.GetType().GetProperty(name);
            Assert.IsNotNull(property);
            Assert.AreEqual(type, property.PropertyType);
            Assert.IsTrue(property.CanWrite);
            Assert.IsTrue(property.CanRead);
            property.SetValue(o, null);
            var actual = property.GetValue(o);
            Assert.AreEqual(null, actual);
        }

        protected static void isPropertyTypeOf(object o, string name, Type expected)
        {
            var property = o.GetType().GetProperty(name);
            Assert.IsNotNull(property);
            Assert.AreEqual(expected, property.PropertyType);
        }
    }

}