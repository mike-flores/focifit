using FociFit.Models.Domains;
using FociFit.Models.Responses;
using FociFit.Services;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace FociFit.Web.Controllers
{
    public class MovieController : ApiController
    {
        MoviesService movieService = new MoviesService();

        [HttpPost, Route("api/movies")]
        public HttpResponseMessage Create(MoviesCreateRequest createRequest)
        {
            // validate the data that the client sent

            //1. Did they send us anything at all?
            if (createRequest == null)
            {
                ModelState.AddModelError("", "missing boy data!"); //The emtpy string means the error applies to the whole request.
            }
            //2. check wheteher there aren any model errors.
            if (!ModelState.IsValid)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }


            //3. If we got this far, then the data is valid and we should call the service.
            int newId = movieService.Insert(createRequest);
            return Request.CreateResponse(HttpStatusCode.OK, newId);
        }

        [HttpGet, Route("api/movies/{id:int}")]
        public HttpResponseMessage ReadById(int id)
        {
            Movie movie = movieService.SelectById(id);
            if(movie == null)
            {
                return Request.CreateResponse(HttpStatusCode.NotFound);
            }
            else
            {

            }
            return Request.CreateResponse(HttpStatusCode.OK, movie);
        }

        [HttpGet, Route("api/movies")]
        public List<Movie> ReadAll()
        {
            List<Movie> movies = movieService.SelectAll();

            return movies;
        }

        [HttpPut, Route("api/movies/{id:int}")]
        public HttpResponseMessage Update(int id, MoviesUpdateRequest moviesUpdateRequest)
        {
            if (moviesUpdateRequest == null)
            {
                ModelState.AddModelError("", "no body data sent.");
            }
            else if(id!= moviesUpdateRequest.Id)
            {
                ModelState.AddModelError("id", "id in the URL does not match the ID in the body");               
            }

            if (!ModelState.IsValid)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }
            movieService.Update(moviesUpdateRequest);
            return Request.CreateResponse(HttpStatusCode.OK);
        }

        [HttpDelete, Route("api/movies/{id:int}")]
        public HttpResponseMessage Delete(int id)
        {
           int rowsAffected = movieService.Delete(id);
            if(rowsAffected < 1)
            {
                ModelState.AddModelError("", "The requested entry does not exist in the database.");
            }
            if (!ModelState.IsValid)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }
            return Request.CreateResponse(HttpStatusCode.OK);
        }
    }
}