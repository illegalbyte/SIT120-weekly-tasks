function gettime() {
	document.getElementById("timebutton").innerHTML = "The time is " + new Date().toLocaleTimeString();
}

var app = new Vue({
	el: '#app',
	data: {
		message: 'Hello Vue!'
	}
})