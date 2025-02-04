// Write a function that combines two arrays by alternatingly taking elements from each array in turn.

//My solution:
function mergeArrays(arrA, arrB) {
	const res = [];
	let i=0; 
	while ((i<arrA.length) || (i<arrB.length) ) {
		if (i<arrA.length) res.push(arrA[i]); 
		if (i<arrB.length) res.push(arrB[i]); 
		i++;
	}
	return res;
}