
// Color Setup
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

var date = new Date();
var hours = date.getHours();

// Adds a night time stylesheet
if ( hours <= 5 || hours >= 16 ){
	document.documentElement.classList.add("night");
}
