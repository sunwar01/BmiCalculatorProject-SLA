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
            result.Add(new BMIMeasurement(rdr.GetInt32(0), rdr.GetDouble(1), rdr.GetDouble(2)));
        }

        return result;

    }
    
    
    public void SaveMeasurements(BMIMeasurement measurement)
    {
        using MySqlConnection connection = GetConnection();

        string sql = "insert into BMI_Measurement (height, weight) values (@height, @weight);";
        
        using var cmd = new MySqlCommand(sql, connection);
        
        cmd.Parameters.AddWithValue("@height", measurement.height);
        cmd.Parameters.AddWithValue("@weight", measurement.weight);

        cmd.ExecuteNonQuery();
    }
    
    
    
    
    private MySqlConnection GetConnection()
    {
        var connection = new MySqlConnection("Server=45.90.123.13;Port=3306;Database=BMIDatabase;UID=user;PWD=password");
        
        
        connection.Open();
        return connection;
    }
    
    
}