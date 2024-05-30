namespace BmiCalculatorAPI_SLA.Models;

public class BMIMeasurement
{
    public int Id { get; set; }
    public double Height { get; set; }
    public double Weight { get; set; }

    public BMIMeasurement(int id, double height, double weight)
    {
        Id = id;
        Height = height;
        Weight = weight;
    }
    
    public BMIMeasurement(double height, double weight)
    {
        Height = height;
        Weight = weight;
    }



    private double calculateBMI()
    {
        return Weight / Math.Pow(Height, 2);
    }


}