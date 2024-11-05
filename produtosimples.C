#include <stdio.h>

int main()
{
  int A, B, PROD;
  scanf("%d", &A);//%d é uma especificação de formato de inteiros na base 10
  scanf("%d", &B);
  
  PROD=A * B;
  
  printf("PROD = %d\n", PROD);
  
  return 0;
}
