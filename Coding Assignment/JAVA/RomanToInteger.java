import java.util.Scanner;
public class RomanToInteger {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		System.out.print("Enter Roman Number---");
		String romanNumeral = sc.nextLine();
		boolean invalid = false;
		int result = 0;
		int prevValue = 0;
		for(int i=romanNumeral.length()-1; i>=0; i--) {
			char c = romanNumeral.charAt(i);
			int value = 0;
			switch(c) {
				case 'I':
					value = 1;
					break;
				case 'V':
					value = 5;
					break;
				case 'X':
					value = 10;
					break;
				case 'L':
					value = 50;
					break;
				case 'C':
					value = 100;
					break;
				case 'D':
					value = 500;
					break;
				case 'M':
					value = 1000;
					break;
				default:
					invalid = true;
					break;
			}
			if(value < prevValue) {
				result -= value;
			} else {
				result += value;
			}
			prevValue = value;
		}
		if(invalid) {
			System.out.print("Invalid Roman Numeral");
		} else {
			System.out.print("Integer value to given Roman---" + result);
		}
		scanner.close();
	}
}