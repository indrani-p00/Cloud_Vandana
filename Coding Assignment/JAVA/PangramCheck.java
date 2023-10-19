import java.util.Scanner;
public class PangramCheck {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		System.out.print("Enter a sentence: ");
		String input = scanner.nextLine();
		boolean[] alphabet = new boolean[26];
		input = input.toLowerCase();
		for(int i=0; i<input.length(); i++) {
			char c = input.charAt(i);
			if(Character.isLetter(c)) {
				int index = c - 'a';
				alphabet[index] = true;
			}
		}
		boolean isPangram = true;
		for(boolean letter : alphabet) {
			if(!letter) {
				isPangram = false;
				break;
			}
		}
		if(isPangram) {
			System.out.print("The sentence is a pangram.");
		} else {
			System.out.print("The sentence is not pangram.");
		}
		scanner.close();
	}
}