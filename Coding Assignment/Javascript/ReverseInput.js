function reverseInput(sentence) {
	let words = sentence.split(" ');
	//reverse each word
	for(let i=0; i<words.length; i++) {
		words[i] = reverseWord(words[i]);
	}
	//join the reversed word back into sentence
	let reversedSentence = reversedWords.join(" ");
	return reversedSentence;
}
function reverseWord(word) {
	let reversed = "";
	for(let i=word.length-1; i>=0; i--) {
		reversed += word[i];
	}
	return reversed;
}
const input = prompt("Please enter some text: ");
const result = reverseInput(input);
console.log("Reversed words of the given input------" + result);