using System.Linq;

public class Kata
{
    public static bool is_divide_by(int number, int a, int b)
    {
        int[] numbers = {a, b};
        return numbers.All(n => number % n == 0);
    }
}
