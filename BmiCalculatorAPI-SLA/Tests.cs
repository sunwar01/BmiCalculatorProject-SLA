using System.Collections;
using BmiCalculatorAPI_SLA.Models;
using NUnit.Framework;

namespace BmiCalculatorAPI_SLA;

[TestFixture]

public class BMITests
{
    
    
    [Test]
    public void TestGetMeasurements()
    {
        DatabaseService db = new DatabaseService();
        
        ArrayList measurements = db.GetMeasurements();
        
        Assert.That(0, Is.EqualTo(measurements.Count));
    }
    
    [Test]
    
    public void TestSaveMeasurements()
    {
        DatabaseService db = new DatabaseService();
        
        BMIMeasurement measurement = new BMIMeasurement(1, 1.80, 80);
        
        db.SaveMeasurements(measurement);
        
        ArrayList measurements = db.GetMeasurements();
        
        Assert.That(1,Is.EqualTo( measurements.Count));
    }
    
    [Test]
    public void TestCalculateBMI()
    {
        BMIMeasurement measurement = new BMIMeasurement(1.80, 80);
        
        double bmi = measurement.calculateBMI();
        
        Assert.That(24.69,Is.EqualTo( bmi).Within(0.01));
    }
    
}