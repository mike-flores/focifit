using System;
using FociFit.Models.Responses;
using FociFit.Services;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace FociFit.UnitTests
{
    [TestClass]
    public class MoviesTest
    {
        [TestMethod]
        public void InsertTest()
        {
            MoviesCreateRequest model = new MoviesCreateRequest
            {
                Title = "Some Movie",
                ReleaseYear = 2018
            };
            MoviesService service = new MoviesService();
            int result = service.Insert(model);

            Assert.IsTrue(result > 0, "The insert failed");
        }
    }
}
