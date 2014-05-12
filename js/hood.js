//FUNCTION TO GET GROUP VALUES (RADIOS/CHECKBOXES)
function getGroupValue(groupName) {

	return document.querySelector('input[name="' + groupName + '"]:checked').value;
}

//FUNCTION TO GET GROUP VALUES (DROP MENUS)
function getComboValue(name) {

	return document.sfHood[name].value;

}

function calculateHood(){

//!!!!!!!QUESTION VALUES!!!!!!!!!!!!!!!!

	var userScore = 0;
	var form = document.sfHood;
//THIS GETS AND ADDS UP USER VALUE SCORE
	userScore += parseInt(getGroupValue('sex'));
	userScore += parseInt(getGroupValue('sexuality'));
	userScore += parseInt(getGroupValue('ethnic'));
	userScore += parseInt(getComboValue('drink'));
	userScore += parseInt(getComboValue('drug'));
	userScore += parseInt(getGroupValue('employ'));
	userScore += parseInt(getGroupValue('job'));
	userScore += parseInt(getGroupValue('starter'));
	userScore += parseInt(getGroupValue('non'));
	userScore += parseInt(getComboValue('house'));
	userScore += parseInt(getGroupValue('mates'));
	userScore += parseInt(getGroupValue('parents'));

	//USERCORE / DETERMINES NEIGHBORHOOD THEY BELONG TOO!
	if (userScore >= 200){
		newNeighborhood = 'Castro';
		fileName = 'hoods/castro.html';
	} else if (userScore >= 180){
		newNeighborhood = 'Noe Valley';
		fileName = 'hoods/noe.html';
	} else if (userScore >= 160){
		newNeighborhood = 'Twin Peaks';
		fileName = 'hoods/twin.html';
	} else if (userScore >= 140) {
		newNeighborhood = 'Pacific Heights';
		fileName = 'hoods/pac.html';
	} else if (userScore >= 120){
		newNeighborhood = 'Mission';
		fileName = 'hoods/mission.html';
	} else if (userScore >= 100){
		newNeighborhood = 'Haight';
		fileName = 'hoods/haight.html';
	} else if (userScore >= 80){
		newNeighborhood = 'Sunset';
		fileName = 'hoods/sunset.html';
	} else if (userScore >= 60) {
		newNeighborhood = 'Richmond';
		fileName = 'hoods/richmond.html';
	} else if (userScore >= 40){
		newNeighborhood = 'Portrero Hill';
		fileName = 'hoods/port.html';
	} else if (userScore >= 20){
		newNeighborhood = 'SOMA';
		fileName = 'hoods/soma.html';
	} else if (userScore >= 0){
		newNeighborhood = 'Tenderloin';
		fileName = 'hoods/tender.html';
	}


	//OPENS NEIGHBOORHOOD CORESPONDING WITH USERS SCORE
	window.open(fileName, newNeighborhood);
}


//!!!!!!!!!!!!!!!!!!!!!DROP MENUS!!!!!!!!!!!!!!!!!
function mealChanged(selectEl) {
	return ;
	var value = selectEl.value;
	
	console.log(value);
	
	var children  = container.getElementsByTagName('div');
	
	for (var i = 0; i < children.length; i++) {
		children[i].setAttribute('style', 'display:none;');	
	}
	
	document.getElementById(value + 'Response').setAttribute('style', 'display:block;');
}

function alcoholChange(selectEl) {
	return;
	var value = selectEl.value;
	
	console.log(value);
	
	var children  = container.getElementsByTagName('div');
	
	for (var i = 0; i < children.length; i++) {
		children[i].setAttribute('style', 'display:none;');	
	}
	
	document.getElementById(value + 'Response').setAttribute('style', 'display:block;');
}

function drugChange(selectEl) {
	return;
	var value = selectEl.value;
	
	console.log(value);
	
	var children  = container.getElementsByTagName('div');
	
	for (var i = 0; i < children.length; i++) {
		children[i].setAttribute('style', 'display:none;');	
	}
	
	document.getElementById(value + 'Response').setAttribute('style', 'display:block;');
}

function houseChange(selectEl) {
	return;
	var value = selectEl.value;
	
	console.log(value);
	
	var children  = container.getElementsByTagName('div');
	
	for (var i = 0; i < children.length; i++) {
		children[i].setAttribute('style', 'display:none;');	
	}
	
	document.getElementById(value + 'Response').setAttribute('style', 'display:block;');
}


//!!!!!!!!!!!!!!!!!!!!!VALIDATION!!!!!!!!!!!!!!!!!
function validate() {
	var errors = false;
	//validating form
	var form = document.sfHood;
	console.log(sfHood.elements);


	//Q1
	if(!form.elements.sex.value){
		//sex validation
		document.getElementById('qOneError').innerHTML = 'Please select your sex!';
		errors = true;
	}

	//Q2
	if(!form.elements.sexuality.value){
		//sexuality validation
		document.getElementById('qTwoError').innerHTML = 'Please select your sexual preference!';
		errors = true;
	}

	//Q3
	var ethnicBox = document.sfHood.elements['ethnic'];
	var ethnicChecked = 0;
		//ETHNICITY VALIDATION
	for (var i=0; i < ethnicBox.length; i++){
		if (ethnicBox[i].checked) {
			ethnicChecked++;
		}
	}

	if (!ethnicChecked){
		//alerts user to check their ethnicity
		document.getElementById('qThreeError').innerHTML = 'Please select your ethnicity!';
		errors = true;
	}

	//Q5
	if(!form.elements.drug.value){
		//drink vaidation
		document.getElementById('qFiveError').innerHTML = 'Please select your drug of choice!';
		errors = true;
	}

	//Q4
	if(!form.elements.drink.value){
		//drug validation
		document.getElementById('qFourError').innerHTML = 'Please select your alcohol of choice!';
	}

	//Q6
	if(!form.elements.employ.value){
		//employement validation
		document.getElementById('qSixError').innerHTML = 'Please select if you are employed!';
		errors = true;
	}

	//Q7
	if(!form.elements.student.value){
		//student validation
		document.getElementById('qSevenError').innerHTML = 'Please select if you are a student!';
	}

	//Q8
	var jobBox = document.sfHood.elements['job'];
	var jobChecked = 0;
		//JOB VALIDATION
	for (var i=0; i < jobBox.length; i++){
		if (jobBox[i].checked) {
			jobChecked++;
		}
	}

	if (!jobChecked){
		//alerts user to check their job
		document.getElementById('qEightError').innerHTML = 'Please select your profession!';
		errors = true;
	}

	//Q9
	if(!form.elements.starter.value){
		//start up validation
		document.getElementById('qNineError').innerHTML = 'Please select if work for a start up!';
		errors = true;
	}

	//Q10
	if(!form.elements.non.value){
		//non profit validation
		document.getElementById('qTenError').innerHTML = 'Please select if you work for a non profit!';
		errors = true;
	}

	//Q11
	if(!form.elements.house.value){
		//housing validation
		document.getElementById('qElevenError').innerHTML = 'Please select your housing!';
		errors = true;
	}

	//Q12
	if(!form.elements.mates.value){
		//roommates validation
		document.getElementById('qTwelveError').innerHTML = 'Please select if you live with roommates!';
		errors = true;
	}

	if(!form.elements.parents.value){
		//parents validation
		document.getElementById('qThirteenError').innerHTML = 'Please select if you live with your parents!';
		errors = true;
	}
		//IF ALL PERAMETERS ARE NOT MET ALERTS USER TO FILL THEM OUT
	if (errors) {
		return false;
		//IF PERAMETERS ARE MET ALLOWS USER TO SEE THEIR NEIGHBORHOOD
	} else {
		calculateHood();
		
	}
}