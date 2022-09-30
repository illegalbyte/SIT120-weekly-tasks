
// global vue2 component
Vue.component('sitetitle', {
	template: '<div class="header-left"><a href="https://github.com/illegalbyte/SIT120-weekly-tasks"><h1 id="sitetitle">MeetScribe!</h1><img src="img/Group 12logo.png" id="logoimage" alt="MeetScribe Logo"></a></div>'
})
Vue.component('navbar', {
	template: '<div class="navbar header-right"><ul><li class="active"><a href="/index.html">Home</a></li><li><a href="/contact.html">Contact</a></li><li><a href="/about.html">About</a></li><li><a href="/signup.html">Sign Up</a></li><li><a href="/login.html">Login</a></li></ul></div>'
})


// Vue Custom Directive which colours the text of the element it is applied to rainbow colours
Vue.directive('rainbow', {
	bind(el, binding, vnode) {
		el.style.color = "#" + Math.random().toString(16).slice(2, 8);
	}
});

// Vue component which displays the prior transaction history of the user
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

// Main vue instance
var app = new Vue({
	el: '#app',
	data: {
		// sample transcription data
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
			{
				id: 4,
				title: "Transcription 4",
				date: "2022-07-08",
				text: "The earliest known bird-like dinosaurs are the coelurosaurs, which first appeared during the late Jurassic period, about 150 million years ago. The earliest known true birds are found from the mid-Cretaceous period, around 100 million years ago, and include the small-bodied, long-tailed troodontids, the large-bodied oviraptorosaurs, and the feathered dinosaurs, which are thought to be the direct ancestors of modern birds. The earliest known bird fossils are from the late Cretaceous period, about 100 million years ago, and include the small-bodied, long-tailed troodontids, the large-bodied oviraptorosaurs, and the feathered dinosaurs, which are thought to be the direct ancestors of modern birds. The earliest known bird fossils are from the late Cretaceous period, about 100 million years ago, and include the small-bodied, long-tailed troodontids, the large-bodied oviraptorosaurs, and the feathered dinosaurs, which are thought to be the direct ancestors of modern birds.",
			},
			{
				id: 5,
				title: "Transcription 5",
				date: "2022-09-10",
				text: "The earliest known bird fossils are from the late Cretaceous period, about 100 million years ago, and include the small-bodied, long-tailed troodontids, the large-bodied oviraptorosaurs, and the feathered dinosaurs, which are thought to be the direct ancestors of modern birds.",
			},
			{
				id: 6,
				title: "Transcription 6",
				date: "2022-11-12",
				text: "The earliest known bird fossils are from the late Cretaceous period, about 100 million years ago, and include the small-bodied, long-tailed troodontids, the large-bodied oviraptorosaurs, and the feathered dinosaurs, which are thought to be the direct ancestors of modern birds.",
			},
			{
				id: 7,
				title: "Transcription 7",
				date: "2022-12-13",
				text: "The dodo bird is a flightless bird that was endemic to the island of Mauritius, east of Madagascar, in the Indian Ocean. It is believed to have become extinct in the early 17th century due to human activities, although some believe it may have survived until the 1680s. The dodo was about 1.2 m (4 ft) tall and weighed about 15 kg (33 lb). It had a large head, a short neck, and a stout, powerful body. Its wings were short and rounded, and its tail was short and fleshy. The dodo had a large beak, with a long lower mandible and a short upper mandible. The dodo's diet consisted mainly of fruit, seeds, and nuts. It was flightless because of the evolution of its wings into flippers, which were used for swimming. The dodo was hunted to extinction by humans for its meat and feathers. The dodo was first described by Dutch sailors in 1598, and was later depicted in paintings and drawings by artists such as Jan van der Straet and John Gerrard Keulemans. The dodo was the subject of many scientific studies, and was the inspiration for the term dodo bird, which is used to describe something that is slow, stupid, or out of date.",
			},
			{
				id: 8,
				title: "Transcription 8",
				date: "2022-12-14",
				text: "Aligators were first described by Dutch sailors in 1598, and were later depicted in paintings and drawings by artists such as Jan van der Straet and John Gerrard Keulemans. The aligator was the subject of many scientific studies, and was the inspiration for the term aligator bird, which is used to describe something that is slow, stupid, or out of date.",
			}
		],
		// login values
		email: "",
		password: "",
		logincheckbox: false,
		newuser: false,
		// used for v-for select and options binding
		selected: 'A',
		options: [
			{ text: "Personal", value: "A"},
			{ text: "Professional", value: "B"},
			{ text: "Commercial", value: "C"},
		],
		// sample transcript string which is put in the transcription box
		transcriptiontext: "Deakin University is a public university in Victoria, Australia. Founded in 1974, the university was named after Alfred Deakin, the second Prime Minister of Australia. Its main campuses are in Melbourne's Burwood suburb, Geelong Waurn Ponds, Geelong Waterfront and Warrnambool, as well as the online Cloud Campus. Deakin also has learning centres in Dandenong and Werribee, all in the state of Victoria. As of 2021, Deakin University is ranked among the top 1% of universities in the world, [2] is ranked one of the top 26 young universities in the world, [3] is the 3rd highest ranked university in the world for Sport Science, [4] is one of the top 29 universities in the world for Nursing, [5] is one of the top 32 universities in the world for Education, [6] and is among fewer than 5% of Business Schools worldwide with Association to Advance Collegiate Schools of Business accreditation.[7] Deakin's research activities are growing.[8] 100% of Deakin research was rated at or above world standard in the 2018 Excellence in Research Australia (ERA) ratings.[9] Its combined research funding increased from A$4.5 million in 1997 to A$47.2 million in 2015.[8] In 2020, the university's research income was $87.6 million, with 247 Higher degree by Research completions. Deakin University consistently ranks highly in undergraduate student satisfaction; in the 2019 Student Experience Survey, Deakin had the fourth highest student satisfaction rating nationally, the highest student satisfaction rating out of all Australian public universities and the highest student satisfaction rating out of all Victorian universities.[10][11][12] Deakin has had the highest undergraduate student satisfaction ratings out of all Victorian universities every year since 2010 and has consistently placed in the top two for highest postgraduate student satisfaction out of all Victorian universities every year since 2010.",
		transcriptiondefault: "",
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
		writeTranscription: function () {
			this.transcriptiondefault = this.transcriptiontext
		},
		saveTranscription: function () {
			// append to array this.transcriptions:
			this.transcriptions.push({
				id: this.transcriptions.length + 1,
				title: "Transcription " + (this.transcriptions.length + 1),
				date: "2022-01-01",
				text: this.transcriptiondefault,
			});
		},
	},
	components: {
		transcriptionbox: transcriptionbox,
	},

})