using FociFit.Models.Responses;
using System.Configuration;
using System.Data.SqlClient;

namespace FociFit.Services
{
    public class MoviesService
    {
        private string connectionString = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;

        public int Insert(MoviesCreateRequest model)
        {
            int result = 0;
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                string sqlQuery = "Movies_Insert";
                using (SqlCommand command = new SqlCommand(sqlQuery, connection))
                {
                    command.CommandType = System.Data.CommandType.StoredProcedure;
                    SqlParameter parameter = new SqlParameter();
                    parameter.ParameterName = "@Id";
                    parameter.SqlDbType = System.Data.SqlDbType.Int;
                    parameter.Direction = System.Data.ParameterDirection.Output;

                    command.Parameters.Add(parameter);
                    command.Parameters.AddWithValue("@Title", model.Title);
                    command.Parameters.AddWithValue("@ReleaseYear", model.ReleaseYear);

                    connection.Open();
                    command.ExecuteNonQuery(); //Execute the stored procedure
                    result = (int)command.Parameters["@Id"].Value; //this must come after 
                    connection.Close();
                }//command disposed
            }//connection disposed
            return result;
        }

    }
}
