using System.Collections;
using BmiCalculatorAPI_SLA.Models;
using MySqlConnector;

namespace BmiCalculatorAPI_SLA;

public class DatabaseService
{


    public ArrayList GetMeasurements()
    {
        using MySqlConnection connection = GetConnection();

        string sql = "select * from BMI_Measurement;";
        
        using var cmd = new MySqlCommand(sql, connection);

        using MySqlDataReader rdr = cmd.ExecuteReader();

        ArrayList result = new ArrayList();

        while (rdr.Read())
        {
            int id = rdr.GetInt32(0);
            double height = rdr.GetDouble(1);
            double weight = rdr.GetDouble(2);
            

            result.Add(new BMIMeasurement(id, height, weight));
        }

        return result;

    }
    
    
    public void SaveMeasurements(BMIMeasurement measurement)
    {
        using MySqlConnection connection = GetConnection();

        string sql = "insert into BMI_Measurement (height, weight) values (@height, @weight);";
        
        using var cmd = new MySqlCommand(sql, connection);
        
        cmd.Parameters.AddWithValue("@height", measurement.Height);
        cmd.Parameters.AddWithValue("@weight", measurement.Weight);

        cmd.ExecuteNonQuery();
    }

    private string user = null; 
    private string password = null;
    
    private void ExtractCredentials()
    {
        string path = "db/flyway.conf";
        
        string[] lines = System.IO.File.ReadAllLines(path);
        
        foreach (string line in lines)
        {
            if (line.StartsWith("flyway.user"))
            {
                string[] parts = line.Split("=");
                user = parts[1];
            }
            else if (line.StartsWith("flyway.password"))
            {
                string[] parts = line.Split("=");
                password = parts[1];
            }
        }
        
     
    }
    
    
    private MySqlConnection GetConnection()
    {
        
        ExtractCredentials();   
       
        
        var connection = new MySqlConnection("Server=45.90.123.13;Port=3306;Database=BMIDatabase;UID=" + user + ";PWD=" + password);
        
        
        connection.Open();
        return connection;
    }
    
    
}