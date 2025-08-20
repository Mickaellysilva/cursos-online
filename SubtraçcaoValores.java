import java.util.Scanner;

public class SubtracaoValores
{
	public static void main(String[] args) {
		int primeiroNumero, segundoNumero;
		int resultado;
	    
	    Scanner entrada = new Scanner(System.in);
	    
	    System.out.println("Digite o primeiro número: ");
	    primeiroNumero = entrada.nextInt();
	    
	    System.out.println("Digite o segundo nùmero: ");
	    segundoNumero = entrada.nextInt();
	    
	    resultado = (primeiroNumero - segundoNumero);
	    System.out.println("O resultado da subtração de " + primeiroNumero + " - " + segundoNumero +" é: " + resultado);
	    
	}
}
