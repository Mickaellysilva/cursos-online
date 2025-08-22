import java.util.Scanner;

public class CalculadoraPrimitiva
{
	public static void main(String[] args) {
		int num1, num2, operacao;
		int resultado;
		
		Scanner scanner = new Scanner(System.in);
		
		System.out.println("Digite um valor: ");
		num1 = scanner.nextInt();
		System.out.println("Valor Aceito!");
		
		System.out.println("Digite um segundo valor: ");
		num2 = scanner.nextInt();
		System.out.println("Valor Aceito! Aguarde um momento.");
		
		System.out.println("Que operação você deseja realizar entre esses dois valores? Digite 1 para adicionar, 2 para subrair, 3 para multiplicar e 4 para a divisão dos mesmos: ");
		operacao = scanner.nextInt();
		
		switch(operacao){
		    case 1:
		        resultado = num1 + num2;
		        System.out.println("O valor da adição dos dois valores é: " + resultado);
		        break;
		    
		    case 2:
		        resultado = num1 - num2;
		        System.out.println("O valor da subtração dos dois valores é: " + resultado);
		        break;
		    
		    case 3:
		        resultado = num1 * num2;
		        System.out.println("O valor da multiplicação dos dois valores é: " + resultado);
		        break;
		    
		    case 4:
		        resultado = num1 / num2;
		        System.out.println("O valor da divisão dos dois valores é: " + resultado);
		        break;
		    

		}
	}
}
