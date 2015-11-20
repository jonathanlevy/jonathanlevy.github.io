// This is the State of our page
var lightSwitch = 'on';

$('#light-switch').on('click', updateLight);

function updateLight() {

// Check the state of the page,
// and if its on
// Let's return the page dark
if(lightSwitch == 'on') {

	$('body').css ('background-color','black');
	lightSwitch = 'off';
	// turn the page dark
} else {

	$('body').css ('background-color','white');
	// turn the page light
	}
}