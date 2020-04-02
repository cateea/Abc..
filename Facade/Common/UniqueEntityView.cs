using System.ComponentModel.DataAnnotations;

namespace Abc.Facade.Common {

    public abstract class UniqueEntityView : PeriodView {

        [Required]
        public string Id { get; set; }

    }

}