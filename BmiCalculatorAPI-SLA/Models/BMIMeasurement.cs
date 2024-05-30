namespace BmiCalculatorAPI_SLA.Models;

public class BMIMeasurement
{
    public int id;
    public double height;
    public double weight;
    
    public BMIMeasurement(int id, double height, double weight)
    {
        this.id = id;
        this.height = height;
        this.weight = weight;
    }
    
    public BMIMeasurement(double height, double weight)
    {
        this.height = height;
        this.weight = weight;
    }



    private double calculateBMI()
    {
        return weight / Math.Pow(height, 2);
    }


}