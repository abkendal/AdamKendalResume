var bio = {
	"name": "Adam Kendal",
	"role": "Front-End Web Developer",
	"contacts": {
		"mobile" : "647-802-6755",
		"email": "kendal.adam@gmail.com",
		"github": "Kendalab",
		"twitter": "Kendalab",
		"location": "Toronto, Ontario"
	},
	"pictureURL": "https://fbcdn-sphotos-b-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-9/10403571_10202745620315741_8553441052524735893_n.jpg?oh=a99fefbab1fac54b388caed506e6c8e2&oe=54E1D402&__gda__=1424062845_2a9dab8ecf8a23aeb8f5b44532f0ecd7",
	"welcome": "Dynamic web developer with advanced technical knowledge, seeking to leverage these strengths as a scientific researcher into an entry-level font end web development position",
	"skills": ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap"]
};

var work = {
	"jobs": [
		{
			"employer": "Azureda Inc.",
			"title": "Front-End Web Developer",
			"location": "Toronto, Ontario",
			"dates": "September 2014 - Current",
			"description": " Use HTML5, CSS3, JavaScript, jQuery, and Bootstrap to build static web pages and web apps."
		},
		{
			"employer": "Douglas Mental Health Hospital",
			"title": "Graduate Student Researcher",
			"location": "Montreal, Quebec",
			"dates": "September 2012 - September 2014",
			"description": "Performed neuropsychological research relating to guilt, depression and suicide using clinical assessments, fMRI, EEG, and meta-analytic techniques."
		},
		{
			"employer": "Rotman Research Institute at Baycrest",
			"title": "Summer Student Researcher",
			"location": "Toronto, Ontario",
			"dates": "Summer 2012",
			"description": "Performed neuropsychological research relating to vision, audition and ageing using psychoaccoustic testing and MEG. Designed stimuli and experiment using MATLAB and Presentation."
		},
		{
			"employer": "Turner Fliescher Architects Inc.",
			"title": "Architectual Technician",
			"location": "Toronto, Ontario",
			"dates": "Summer 2010",
			"description": "Designed site plans for various commercial clients using AutoCAD and Revit."
		}
	]
};

var education = {
	"schools": [
		{
			"name": "Udacity",
			"location": "Toronto, Ontario",
			"degree": "Nanodegree",
			"major": "Front-End Web Develper",
			"graduation": 2015
		},
		{
			"name": "McGill University",
			"location": "Montreal, Quebec",
			"degree": "M.Sc.",
			"major": "Integrated Program in Neuroscience",
			"minor": "None",
			"graduation": 2014
		},
		{
			"name": "McMaster University",
			"location": "Hamilton, Ontario",
			"degree": "B.Sc. Hon.",
			"major": "Psychology, Behaviour & Neuroscience",
			"minor": "None",
			"graduation": 2012
		}
	],
	"onlineCourses": [
		{
			"title": "Javascript Syntax",
			"school": "Udacity",
			"dates": 2014,
			"degree": "Front-End Web Developer Nanodegree"
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "Maple-a-Month",
			"dates": "2014",
			"description": "Maple-a-Month is a service in which a different bottle of %100 pure Canadian maple syrup is delivered to your door every month",
			"images": ["https://scontent-a-ord.xx.fbcdn.net/hphotos-xpa1/v/t1.0-9/1069789_300255893509689_6246938587965157788_n.jpg?oh=56c5f8811bd285c6eab254c95b0d0f65&oe=54E49BDC"]
		}
	]
};


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedPicture = HTMLbioPic.replace("%data%", bio.pictureURL);
var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcome);

$("#header").prepend(formattedWelcome)
$("#header").prepend(formattedPicture)
$("#header").prepend(formattedEmail)
$("#header").prepend(formattedMobile)
$("#header").prepend(formattedRole)
$("#header").prepend(formattedName)


if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	
	for (x in bio.skills) {
		var formattedSkills = HTMLskills.replace("%data%", bio.skills[x])
		$("#skills").append(formattedSkills);
	};
}

function displayWork() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	};
};

displayWork();


//Proper way to solve the quiz
function inName(name) {
	var name = name.trim().split(" ");
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1);
	name[1] = name[1].toUpperCase();
	return name[0] + " " + name[1];
}


$("#main").append(internationalizeButton);


// Encapsulated function within the projects object to population the projects section of the page
projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedProjTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedProjTitle);
		var formattedProjDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedProjDates);
		var formattedProjDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedProjDescription);
		
		if (projects.projects[project].images.length > 0) {
			console.log(projects.projects[project].images);
			for (image in projects.projects[project].images){
				var formattedProjImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
				$(".project-entry:last").append(formattedProjImage);
				console.log("Hello");
			}
		}

	}



};
projects.display();
education.display = function() {
	for (z in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[z].name);
		$(".education-entry:last").append(formattedSchoolName);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[z].degree);
		$(".edication-entry:last").append(formattedSchoolDegree);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[z].graduation);
		$(".education-entry:last").append(formattedSchoolDates);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[z].location);
		$(".education-entry:last").append(formattedSchoolLocation);
		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[z].major);
		$(".education-entry:last").append(formattedSchoolMajor);
		}
};
education.display();



$("#mapDiv").append(googleMap);

$(document).ready(function() {
	$('img').click(function(){
		$(this).effect('bounce', 'slow');
	});		
});


footerContacts.display = function() {
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		$("#footerContacts").append(formattedMobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		$("#footerContacts").append(formattedEmail);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		$("#footerContacts").append(formattedTwitter);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		$("#footerContacts").append(formattedGithub);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		$("#footerContacts").append(formattedLocation);

};
footerContacts.display();

