//* O(n)
//* Proportional */
function logItems(n) {
	for (let i = 0; i <= n; i++) {
		console.log(i);
	}
}
// logItems(10);
function logItems1(n) {
	for (let i = 0; i <= n; i++) {
		console.log(i);
	}
	for (let j = 0; j <= n; j++) {
		console.log(j);
	}
}
// logItems1(3);
/* 
n + n = 2n
O(2n) 
O(n)
*/

//* O(n^2) Inefficient
//* Loop Within Loop */

function logItems2(n) {
	for (let i = 0; i <= n; i++) {
		for (let j = 0; j <= n; j++) {
			for (let k = 0; k <= n; k++) {
				console.log(i, j, k);
			}
		}
	}
}

// logItems2(3);
/* 
n * n = n^2 
*/

//*O(log n)
//* Divide and Conquer */

//* O(1) Most Efficient - Constant Time

function addItems(n) {
	return n + n + n;
}

//* Different Terms for inputs

function logProducts(a, b) {
	for (let a = 0; a < array.length; a++) {
		console.log(a);
	}
	for (let b = 0; b < array.length; b++) {
		console.log(b);
	}
}
/* O(a + b) not O(n)*/

function logProduct(a, b) {
	for (let a = 0; a < array.length; a++) {
		for (let b = 0; b < array.length; b++) {
			console.log(a, b);
		}
	}
}
/* O(a * b) not O(n^2)*/
