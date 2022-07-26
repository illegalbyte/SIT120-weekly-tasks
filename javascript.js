function gettime() {
	document.getElementById("timebutton").innerHTML = "The time is " + new Date().toLocaleTimeString();
}

// var app = new Vue({
// 	el: '#app',
// 	data: {
// 		message: 'Hello Vue!'
// 	}
// })


function week3_js() {
	// use 5 string methods 
	let str = "Hello World";

	console.log(str.toUpperCase());
	console.log(str.toLowerCase());
	console.log(str.charAt(0));
	console.log(str.charCodeAt(0));
	console.log(str.indexOf("o"));
	console.log(str.lastIndexOf("o"));
	console.log(str.substring(0, 5));
	console.log(str.slice(0, 5));


	// string array
	let strarray = ["   Hello    ", "World", "Everyone"];
	// number array
	let numarray = [1, 2, 3, 4, 5];

	for (let i = 0; i < strarray.length; i++) {
		console.log(strarray[i].concat(": ", i));
		console.log(strarray[i].trim());
		console.log(strarray[i].length);
		console.log(strarray[i].toUpperCase());
		console.log(strarray[i].toLowerCase());
		console.log(strarray[i].slice(0, 1));
	}

	for (let i = 0; i < numarray.length; i++) {
		console.log(numarray[i]);
		console.log(numarray[i].toExponential(2));
		console.log(numarray[i] + 120);
	}

	// use 5 javascript date methods
	let date = new Date();
	console.log(date.getFullYear());
	console.log(date.getMonth());
	console.log(date.getDate());
	console.log(date.getDay());
	console.log(date.getHours());
	console.log(date.getMinutes());




}
week3_js();