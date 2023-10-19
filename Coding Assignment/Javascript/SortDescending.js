function sortDescending(arr) {
	let n = arr.length;
	let swapped = true;
	while(swapped) {
		swapped = false;
		for(let i=0; i<n-1; i++) {
			if(arr[i]<arr[i+1]) {
				let temp = arr[i];
				arr[i] = arr[i+1];
				arr[i+1] = temp;
				swapped = true;
			}
		}
	}
	return arr;
}
const input = [5,2,9,3,6];
const result = sortDescending(input);
console.log(result);