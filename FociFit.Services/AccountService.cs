using FociFit.Models.Domains;
using FociFit.Models.Requests;
using FociFit.Models.Responses;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;

namespace FociFit.Services
{

    public class AccountService
    {
        private string connectionString = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;

        public int Create(AccountCreateRequest createRequest)
        {
            int newEntryId = 0;
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                string sqlQuery = "Account_Create";
                using (SqlCommand command = new SqlCommand(sqlQuery, connection))
                {
                    command.CommandType = System.Data.CommandType.StoredProcedure;

                    SqlParameter parameter = new SqlParameter();
                    parameter.ParameterName = "@Id";
                    parameter.SqlDbType = System.Data.SqlDbType.Int;
                    parameter.Direction = System.Data.ParameterDirection.Output;
                    //Alternatively command.Parameters.Add("@Id", SqlDBType.Int).Direction = ParameterDirection.Output;
                    command.Parameters.Add(parameter);
                    command.Parameters.AddWithValue("@Email", createRequest.Email);
                    command.Parameters.AddWithValue("@Password", createRequest.Password);
                    command.Parameters.AddWithValue("@ModifiedBy", createRequest.Password);

                    connection.Open();
                    command.ExecuteNonQuery(); //Non query means no result sets expected
                    newEntryId = (int)command.Parameters["@Id"].Value;
                    connection.Close();
                }
            }
            return newEntryId;
        }

        public Account ReadById(int id)
        {
            Account account = new Account();
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                string sqlQuery = "Account_ReadById";
                using (SqlCommand command = new SqlCommand(sqlQuery, connection))
                {
                    command.CommandType = System.Data.CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@Id", id);

                    connection.Open();
                    SqlDataReader reader = command.ExecuteReader();
                    
                    if(!reader.HasRows)
                    {
                        return null;
                    }
            

                    while (reader.Read())
                    {
                        int index = 0;
                        account.Id = reader.GetInt32(index++);
                        account.Email = reader.GetString(index++);
                        account.Password = reader.GetString(index++);
                        account.CreatedDate = reader.GetDateTime(index++);
                        account.ModifiedDate = reader.GetDateTime(index++);
                        account.ModifiedBy = reader.GetString(index++);
                    }
                    connection.Close();
                }
            }
            return account;
        }

        public Account ReadByEmail(string email)
        {
            Account account = new Account();
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                string sqlQuery = "Account_ReadByEmail";
                using (SqlCommand command = new SqlCommand(sqlQuery, connection))
                {
                    command.CommandType = System.Data.CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@Email", email);

                    connection.Open();
                    SqlDataReader reader = command.ExecuteReader();

                    if (!reader.HasRows)
                    {
                        return null;
                    }


                    while (reader.Read())
                    {
                        int index = 0;
                        account.Id = reader.GetInt32(index++);
                        account.Email = reader.GetString(index++);
                        account.Password = reader.GetString(index++);
                        account.CreatedDate = reader.GetDateTime(index++);
                        account.ModifiedDate = reader.GetDateTime(index++);
                        account.ModifiedBy = reader.GetString(index++);
                    }
                    connection.Close();
                }
            }
            return account;
        }

        public List<Account> ReadAll()
        {
            List<Account> accounts = new List<Account>();
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                string sqlQuery = "Account_ReadAll";
                using (SqlCommand command = new SqlCommand(sqlQuery, connection))
                {
                    command.CommandType = System.Data.CommandType.StoredProcedure;

                    connection.Open();
                    SqlDataReader reader = command.ExecuteReader();
                    while (reader.Read())
                    {
                        int index = 0;
                        Account account = new Account();

                        account.Id = reader.GetInt32(index++);
                        account.Email = reader.GetString(index++);
                        account.Password = reader.GetString(index++);
                        account.CreatedDate = reader.GetDateTime(index++);
                        account.ModifiedDate = reader.GetDateTime(index++);
                        account.ModifiedBy = reader.GetString(index++);
                        accounts.Add(account);
                    }
                    connection.Close();
                }
            }
            return accounts;
        }

        public int Update(AccountUpdateRequest updateRequest)
        {
            int affectedRows = 0;
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                string sqlQuery = "Account_Update";
                using (SqlCommand command = new SqlCommand(sqlQuery, connection))
                {
                    command.CommandType = System.Data.CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@Id", updateRequest.Id);
                    command.Parameters.AddWithValue("@Email", updateRequest.Email);
                    command.Parameters.AddWithValue("@Password", updateRequest.Password /*?? (object)DBNull.Value at the end of a parameter*/);
                    command.Parameters.AddWithValue("ModifiedBy", updateRequest.ModifiedBy);
                    //If a parameter is nullable, ? in the model and also ?? (object)DBNull.Value at the end of a parameter.

                    connection.Open();
                    affectedRows = command.ExecuteNonQuery();
                    connection.Close();
                }
            }
            return affectedRows;
        }

        public int Delete(int id)
        {
            int affectedRows = 0;
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                string sqlQuery = "Account_Delete";
                using (SqlCommand command = new SqlCommand(sqlQuery, connection))
                {
                    command.CommandType = System.Data.CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@Id", id);

                    connection.Open();
                    affectedRows = command.ExecuteNonQuery();
                    connection.Close();
                }
            }
            return affectedRows;
        }
    }
}
