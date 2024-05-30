namespace BmiCalculatorAPI_SLA.Models;

public class BMIMeasurement
{
    private double height;
    private double weight;

    private DateTime timestamp;




    private double calculateBMI()
    {
        return weight / Math.Pow(height, 2);
    }


}