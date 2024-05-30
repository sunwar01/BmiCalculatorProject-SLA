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


    public BMIMeasurement()
    {
        
    }



    public double calculateBMI()
    {
        return Weight / Math.Pow(Height, 2);
    }
    
    
    public string getBMICategory()
    {
        double bmi = calculateBMI();
        
        if (bmi < 18.5)
        {
            return "Underweight";
        }
        else if (bmi < 24.9)
        {
            return "Normal weight";
        }
        else if (bmi < 29.9)
        {
            return "Overweight";
        }
        else
        {
            return "Obese";
        }
    }
    
    


}