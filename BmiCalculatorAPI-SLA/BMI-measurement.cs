namespace BmiCalculatorAPI_SLA;

public class BMI_measurement
{
    private double weight;

    private double height;


    public double calculateBMI()
    {
        return weight / Math.Pow(height, 2);
    }


}