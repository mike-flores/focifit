using System.ComponentModel.DataAnnotations;

namespace FociFit.Models.Responses
{
    public class MoviesUpdateRequest : MoviesCreateRequest
    {
        [Required]
        public int? Id { get; set; }
    }
}
