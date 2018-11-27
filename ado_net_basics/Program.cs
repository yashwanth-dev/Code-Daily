using System;
using System.Data.SqlClient;
using System.IO;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Configuration.FileExtensions;

namespace ado_net_basics
{
    class Program
    {
        static void Main(string[] args)
        {

            var builder = new ConfigurationBuilder()
                            .SetBasePath(Directory.GetCurrentDirectory())
                            .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true);

            IConfigurationRoot configuration = builder.Build();


            var connectionString = @configuration["ConnectionString"];

            var connection = new SqlConnection(connectionString);
            connection.Open();
            ListExpectedtReceipts(connection);
            connection.Close();

            //## Test connection Open and close
            // connection.Open();
            // Console.WriteLine($"Connection State : {connection.State}");
            // connection.Close();
            // Console.WriteLine($"Connection State : {connection.State}");
        }

        private static void ListExpectedtReceipts(SqlConnection con)
        {
            var cmd = @"<Query>";
            SqlCommand getExpectedReceiptsCmd = new SqlCommand(cmd);
            getExpectedReceiptsCmd.Connection = con;

            var reader = getExpectedReceiptsCmd.ExecuteReader();

            int column_1 = reader.GetOrdinal("<column1>");
            int column_2 = reader.GetOrdinal("<column2>");
            int column_3 = reader.GetOrdinal("<column3>");

            while (reader.Read())
            {
                Console.WriteLine($"Expected Receipt Key: {reader.GetInt64(column_1)}\nExpected Receipt Number: {reader.GetInt64(column_2)}\nReceipt Type: {reader.GetInt64(column_3)}\n");
            }
            reader.Close();


        }
    }
}
