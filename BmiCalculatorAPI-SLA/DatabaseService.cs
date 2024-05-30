using MySqlConnector;

namespace BmiCalculatorAPI_SLA;

public class DatabaseService
{
    
    
    
    
    
    private MySqlConnection GetConnection()
    {
        var connection = new MySqlConnection("jdbc:mariadb://45.90.123.13:3306/BMIDatabase?user=user&password=password");
        
        
        connection.Open();
        return connection;
    }
    
    
}