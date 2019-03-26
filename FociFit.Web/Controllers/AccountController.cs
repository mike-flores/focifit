using FociFit.Models.Domains;
using FociFit.Models.Requests;
using FociFit.Models.Responses;
using FociFit.Services;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace FociFit.Web.Controllers
{
    public class AccountController : ApiController
    {
        AccountService accountService = new AccountService();

        [HttpPost, Route("api/accounts")]
        public HttpResponseMessage Create(AccountCreateRequest createRequest)
        {
            // validate the data that the client sent

            //1. Did they send us anything at all?
            if (createRequest == null)
            {
                ModelState.AddModelError("", "The request data is empty!"); //The emtpy string means the error applies to the whole request.
            }
            //2. check wheteher there aren any model errors.
            if (!ModelState.IsValid)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }


            //3. If we got this far, then the data is valid and we should call the service.
            int newId = accountService.Create(createRequest);
            return Request.CreateResponse(HttpStatusCode.OK, newId);
        }

        [HttpGet, Route("api/accounts/{id:int}")]
        public HttpResponseMessage ReadById(int id)
        {
            Account account = accountService.ReadById(id);
            if(account == null)
            {
                ModelState.AddModelError("", "The requested entry does not exist in the database.");
                //return Request.CreateResponse(HttpStatusCode.BadRequest, ModelState);
            }
            if (!ModelState.IsValid)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }

            return Request.CreateResponse(HttpStatusCode.OK, account);
        }

        [HttpGet, Route("api/accounts")]
        public List<Account> ReadAll()
        {
            List<Account> accounts = accountService.ReadAll();

            return accounts;
        }

        [HttpPut, Route("api/accounts/{id:int}")]
        public HttpResponseMessage Update(int id, AccountUpdateRequest updateRequest)
        {
            if (updateRequest == null)
            {
                ModelState.AddModelError("", "There was no data recieved at the endpoint.");
            }
            else if(id!= updateRequest.Id)
            {
                ModelState.AddModelError("id", "id in the URL does not match the ID in the body");               
            }

            if (!ModelState.IsValid)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }
            accountService.Update(updateRequest);

            return Request.CreateResponse(HttpStatusCode.OK);
        }

        [HttpDelete, Route("api/accounts/{id:int}")]
        public HttpResponseMessage Delete(int id)
        {
           int rowsAffected = accountService.Delete(id);
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