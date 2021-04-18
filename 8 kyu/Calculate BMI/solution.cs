using System;

public class Kata
{
  public static string Bmi(double weight, double height)
  {
    var calc = (weight / Math.Pow(height,2));
    
    if(calc <= 18.5) return "Underweight";
    if(calc <= 25.0) return "Normal";
    if(calc <= 30.0) return "Overweight";
    return "Obese";
  }
}
