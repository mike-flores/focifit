using FociFit.Models.Domains;
using FociFit.Models.Responses;
using System;
using System.Collections.Generic;
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
            using(SqlConnection connection = new SqlConnection(connectionString))
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
                    command.ExecuteNonQuery();
                    result = (int)command.Parameters["@Id"].Value;
                    connection.Close();
                }
            }
            return result;
        }

        public Movie SelectById(int id)
        {
            Movie model = new Movie();
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                string sqlQuery = "Movies_SelectById";
                using(SqlCommand command = new SqlCommand(sqlQuery, connection))
                {
                    command.CommandType = System.Data.CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@Id", id);

                    connection.Open();
                    SqlDataReader reader = command.ExecuteReader();
                    while (reader.Read())
                    {
                        int index = 0;
                        model.Id = reader.GetInt32(index++);
                        model.Title = reader.GetString(index++);
                        model.ReleaseYear = reader.GetInt32(index++);
                    }
                    connection.Close();
                }
            }
            return model;
        }

        public List<Movie> SelectAll()
        {
            List<Movie> movies = new List<Movie>();
            using(SqlConnection connection = new SqlConnection(connectionString))
            {
                string sqlQuery = "Movies_SelectAll";
                using(SqlCommand command = new SqlCommand(sqlQuery, connection))
                {
                    command.CommandType = System.Data.CommandType.StoredProcedure;

                    connection.Open();
                    SqlDataReader reader = command.ExecuteReader();
                    while (reader.Read())
                    {
                        int index = 0;
                        Movie model = new Movie();

                        model.Id = reader.GetInt32(index++);
                        model.Title = reader.GetString(index++);
                        model.ReleaseYear = reader.GetInt32(index++);
                        movies.Add(model);
                    }
                    connection.Close();
                }
            }
            return movies;
        }

        public int Update(MoviesUpdateRequest model)
        {
            int affectedRows;
            using(SqlConnection  connection = new SqlConnection(connectionString))
            {
                string sqlQuery = "Movies_Update";
                using(SqlCommand command = new SqlCommand(sqlQuery, connection))
                {
                    command.CommandType = System.Data.CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@Id", model.Id);
                    command.Parameters.AddWithValue("@Title", model.Title);
                    command.Parameters.AddWithValue("@ReleaseYear", model.ReleaseYear);

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
            using(SqlConnection connection = new SqlConnection(connectionString))
            {
                string sqlQuery = "Movies_Delete";
                using(SqlCommand command = new SqlCommand(sqlQuery, connection))
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
