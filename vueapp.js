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
			let index = this.transcriptions.indexOf(id);
			this.transcriptions.splice(index);
			
		},
	}
})