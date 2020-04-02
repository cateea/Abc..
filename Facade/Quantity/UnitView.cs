using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using Abc.Facade.Common;

namespace Abc.Facade.Quantity
{
    public sealed class UnitView: DefinedView
    {
        [Required]
        [DisplayName("Measure")]
        public string MeasureId { get; set; }
    }
}
