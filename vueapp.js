// global vue2 component
Vue.component('sitetitle', {
	template: '<div class="header-left"><a href="https://github.com/illegalbyte/SIT120-weekly-tasks"><h1 id="sitetitle">MeetScribe!</h1><img src="img/Group 12logo.png" id="logoimage" alt="MeetScribe Logo"></a></div><div class="navbar header-right"><ul><li class="active"><a href="/index.html">Home</a></li><li><a href="/contact.html">Contact</a></li><li><a href="/about.html">About</a></li><li><a href="/signup.html">Sign Up</a></li><li><a href="/login.html">Login</a></li></ul></div>'
})
Vue.component('navbar', {
	template: '<div class="navbar header-right"><ul><li class="active"><a href="/index.html">Home</a></li><li><a href="/contact.html">Contact</a></li><li><a href="/about.html">About</a></li><li><a href="/signup.html">Sign Up</a></li><li><a href="/login.html">Login</a></li></ul></div>'
})


Vue.directive('rainbow', {
	bind(el, binding, vnode) {
		el.style.color = "#" + Math.random().toString(16).slice(2, 8);
	}
});


var transcriptionbox = {
	template: '<div><h2 v-rainbow>{{transcription.title}}</h2> <p> {{ transcription.text }}</p><button type="button" name="transcribebutton" v-on:click="emitdeleteTranscription(transcription.id)">Delete</button></div>',
	props: ['transcription'],
	methods: {
		emitdeleteTranscription: function (id) {
			this.$emit('deletetranscript', id);
			console.log(id);
		}
	},
}

var app = new Vue({
	el: '#app',
	data: {
		transcriptions: [
			{
				id: 1,
				title: "Transcription 1",
				date: "2022-01-01",
				text: "This is the Birds are a group of warm-blooded vertebrates constituting the class Aves, characterised by feathers, toothless beaked jaws, the laying of hard-shelled eggs, a high metabolic rate, a four-chambered heart, and a strong yet lightweight skeleton. Birds live worldwide and range in size from the 5.5 cm (2.2 in) bee hummingbird to the 2.8 m (9 ft 2 in) ostrich. There are about ten thousand living species, more than half of which are passerine, or perching birds. Birds have wings whose development varies according to species; the only known groups without wings are the extinct moa and elephant birds. Wings, which evolved from forelimbs, gave birds the ability to fly, although further evolution has led to the loss of flight in some birds, including ratites, penguins, and diverse endemic island species. The digestive and respiratory systems of birds are also uniquely adapted for flight. Some bird species of aquatic environments, particularly seabirds and some waterbirds, have further evolved for swimming.",
			},
			{
				id: 2,
				title: "Transcription 2",
				date: "2022-03-04",
				text: "Many social species pass on knowledge across generations, which is considered a form of culture. Birds are social, communicating with visual signals, calls, and songs, and participating in such behaviours as cooperative breeding and hunting, flocking, and mobbing of predators.",
			},
			{
				id: 3,
				title: "Transcription 3",
				date: "2022-05-06",
				text: "The well-known probable early avialan, Archaeopteryx, dates from slightly later Jurassic rocks (about 155 million years old) from Germany. Many of these early avialans shared unusual anatomical features that may be ancestral to modern birds, but were later lost during bird evolution. These features include enlarged claws on the second toe which may have been held clear of the ground in life, and long feathers or 'hind wings' covering the hind limbs and feet, which may have been used in aerial manoeuvreing.",
			},
		],
		// login values
		email: "",
		password: "",
		logincheckbox: false,
		// used for v-for select and options
		selected: 'A',
		options: [
			{ text: "Personal", value: "A"},
			{ text: "Professional", value: "B"},
			{ text: "Commercial", value: "C"},
		],
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
		deleteTranscription: function (id) {
			// remove index from array this.transcriptions:
			console.log("deleting id" + id)
			let index = this.transcriptions.indexOf(id);
			this.transcriptions.splice(index);	
		},

	},
	components: {
		transcriptionbox: transcriptionbox,
	},

})