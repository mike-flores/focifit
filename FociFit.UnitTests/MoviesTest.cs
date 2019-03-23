using FociFit.Models.Domains;
using FociFit.Models.Responses;
using FociFit.Services;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Collections.Generic;

namespace FociFit.UnitTests
{
    [TestClass]
    public class MoviesTest
    {
        MoviesService service = new MoviesService();
        [TestMethod]
        public void InsertTest()
        {
            MoviesCreateRequest model = new MoviesCreateRequest
            {
                Title = "Some Movie",
                ReleaseYear = 2018
            };
             int result = service.Insert(model);
            Assert.IsTrue(result > 0, "The insert failed");
        }

        [TestMethod]
        public void SelectByIdTest()
        {
            int id = 2;
            Movie model;
            model = service.SelectById(id);
            Assert.IsNotNull(model, "The select by id failed, the model is null");
        }

        [TestMethod]
        public void SelectAllTest()
        {
            List<Movie> movies;

            movies = service.SelectAll();
            Assert.IsNotNull(movies, "The Select all failed, the list is null(empty)");
        }

        [TestMethod]
        public void UpdateTest()
        {
            int affectedRows;
            MoviesUpdateRequest model = new MoviesUpdateRequest
            {
                Id = 1,
                Title = "Some updated movie",
                ReleaseYear = 2001
            };            
            affectedRows = service.Update(model);
            Assert.IsTrue(affectedRows > 0, "The update failed");
        }

        [TestMethod]
        public void DeleteTest()
        {
            int affectedRows;
            int id = 2;

            affectedRows = service.Delete(id);
            Assert.IsTrue(affectedRows > 0, "The delete failed");
        }
    }
}
