

/************************* WINDOW 1 ****************************/

//USES A BUTTON TO OPEN WINDOW 2
function openForm() {
	//fill in form information
	myForm = open('survey.html', 'Form2','height=1000 width=900');
	myForm = moveTo(400,50);
}



/************************* WINDOW 2 ****************************/

//FUNCTION TO DISPLAY CURRENT TIME
function startTime(){
			var toDay=new Date();
			var h = toDay.getHours();
			var m = toDay.getMinutes();
			var s = toDay.getSeconds();
			m = checkTime(m);
			s = checkTime(s);
			document.getElementById('txt').innerHTML=h+":"+m+":"+s;
			t=setTimeout(function(){startTime()},500);
		}
		
		function checkTime(i){
			if (i<10)
			{
				i = "0" + i;
			}
			return i;
		}
		
		
		//

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
		fileName = 'hoods/test.html';
	} else if (userScore >= 180){
		newNeighborhood = 'Noe Valley';
		fileName = 'hoods/test.html';
	} else if (userScore >= 160){
		newNeighborhood = 'Twin Peaks';
		fileName = 'hoods/test.html';
	} else if (userScore >= 140) {
		newNeighborhood = 'Pacific Heights';
		fileName = 'hoods/test.html';
	} else if (userScore >= 120){
		newNeighborhood = 'Mission';
		fileName = 'hoods/test.html';
	} else if (userScore >= 100){
		newNeighborhood = 'Haight';
		fileName = 'hoods/test.html';
	} else if (userScore >= 80){
		newNeighborhood = 'Sunset';
		fileName = 'hoods/test.html';
	} else if (userScore >= 60) {
		newNeighborhood = 'Richmond';
		fileName = 'hoods/test.html';
	} else if (userScore >= 40){
		newNeighborhood = 'Portrero Hill';
		fileName = 'hoods/test.html';
	} else if (userScore >= 20){
		newNeighborhood = 'SOMA';
		fileName = 'hoods/test.html';
	} else if (userScore >= 0){
		newNeighborhood = 'Tenderloin';
		fileName = 'hoods/test.html';
	}


	//OPENS NEIGHBOORHOOD CORESPONDING WITH USERS SCORE
	window.open(fileName, newNeighborhood, 'height=600, width=600');
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

	if(!form.elements.sex.value){
		//sex validation
		alert('enter your sex!');
		errors = true;
	}

	if(!form.elements.sexuality.value){
		//sexuality validation
		alert('enter you sexual preference!');
		errors = true;
	}

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
		alert('pick your ethnicity!');
		errors = true;
	}

	if(!form.elements.drug.value){
		//drink vaidation
		alert('select your favorite drink!');
		errors = true;
	}

	if(!form.elements.drink.value){
		//drug validation
		alert('select your favorite drug!');
	}

	if(!form.elements.employ.value){
		//employement validation
		alert('enter if you are employed!');
		errors = true;
	}

	if(!form.elements.student.value){
		//student validation
		alert('enter if you are a student!')
	}

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
		alert('enter in where you work!');
		errors = true;
	}

	if(!form.elements.starter.value){
		//start up validation
		alert('enter if you work at a start up');
		errors = true;
	}

	if(!form.elements.non.value){
		//non profit validation
		alert('enter if you work for a non profit');
		errors = true;
	}

	if(!form.elements.house.value){
		//housing validation
		alert('enter what type of housing you live in');
		errors = true;
	}

	if(!form.elements.mates.value){
		//roommates validation
		alert('enter in if you live with roommates!');
		errors = true;
	}

	if(!form.elements.parents.value){
		//parents validation
		alert('enter in if you live with your parents!');
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






//!!!!!!!!!!!!!!!!!!!!!!!!QUESTION FORM!!!!!!!!!!!!!!!!!!!!!!


