using System.Linq;

public static class Kata
{
  public static int ArrayPlusArray(int[] arr1, int[] arr2)
  {
    var myArrays = arr1.Concat(arr2).ToArray();
    var sum = 0;
    for(int i=0; i< myArrays.Length; i++ ){
      sum += myArrays[i];
    }
    return sum;
  }
}
