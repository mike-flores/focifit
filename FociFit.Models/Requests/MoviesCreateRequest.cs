using System.ComponentModel.DataAnnotations;

namespace FociFit.Models.Responses
{
    public class MoviesCreateRequest
    {
        [Required, MaxLength(50)]
        public string Title { get; set; }
        [Required, MaxLength(4)]
        public int ReleaseYear { get; set; }
    }
}
