using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace BmiCalculatorAPI_SLA;

public class api
{

    string host2 = "45.90.123.13";
    string databaseName = "BMIDatabase";
    string userName = "root";
    string password = "";


    string connectionstringExample =
        "Server={HOST};Port={PORT};Database={DATABASE};UID={USERNAME};PWD={PASSWORD}.";
    
    
    
    string connectionstring =
        "Server=45.90.123.13;Port=3306;Database=BMIDatabase;UID=root;PWD=.";
/*
   public void getBMI()
    {
        MySqlConnection connection = new MySqlConnection(connectionstring);
        connection.Open();
        MySqlCommand command = new MySqlCommand("SELECT * FROM BMI", connection);
        MySqlDataReader reader = command.ExecuteReader();
        while (reader.Read())
        {
            Console.WriteLine(reader["id"] + " " + reader["height"] + " " + reader["weight"] + " " + reader["bmi"]);
        }
        connection.Close();

*/
   
    
}