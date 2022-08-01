var app = new Vue({
	el: '#app',
	data: {
		message: 'Hello Vue!',
		time: '',
		expanded: false,
		showusersanimal: false,
		animals: ["cat", "dog", "bird", "fish", "lizard"],
	},
	computed: {
		reverseMessage: function () {
			return this.message.split('').reverse().join('');
		},
		firstcharacter: function () {
			return this.message.charAt(0);
		}
	},
	methods: {
		displayTime: function () {
			this.time = new Date().toLocaleTimeString();
		},
		toggleExpanded: function () {
			this.expanded = !this.expanded;
		},
		showAnimal: function() {
			this.showusersanimal = !this.showusersanimal;
		}

	}
})