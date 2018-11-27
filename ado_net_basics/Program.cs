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
            var cmd = @"SELECT EXPECTEDRECEIPTKEY, EXPECTEDRECEIPTNUMBER, RECEIPTTYPE from dbo.ExpectedReceipt";
            SqlCommand getExpectedReceiptsCmd = new SqlCommand(cmd);
            getExpectedReceiptsCmd.Connection = con;

            var reader = getExpectedReceiptsCmd.ExecuteReader();

            int Expected_Receipt_key = reader.GetOrdinal("EXPECTEDRECEIPTKEY");
            int Expected_Receipt_Number = reader.GetOrdinal("EXPECTEDRECEIPTNUMBER");
            int Receipt_Type = reader.GetOrdinal("RECEIPTTYPE");

            while (reader.Read())
            {
                Console.WriteLine($"Expected Receipt Key: {reader.GetInt64(Expected_Receipt_key)}\nExpected Receipt Number: {reader.GetInt64(Expected_Receipt_Number)}\nReceipt Type: {reader.GetInt64(Receipt_Type)}\n");
            }
            reader.Close();


        }
    }
}
