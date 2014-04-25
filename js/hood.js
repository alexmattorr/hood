//Gets group values (radio/checkboxes)
function getGroupValue(groupName) {
	return document.guerySelector('input[name="' + groupName + '"]:checked').value;
}

//Gets group values (dropdown menus)
function getComboValue(name) {
	return document.sfHood[name].value;
}

//Drop menus

	//Alcohol drop menu
function alcoholChange(selectEl) {
	return;
		var value = selectEl.value;
		console.log(value);

		var children = container.getElementById('drinkDiv');
		for (var i = 0; i < children.length; i++) {
			children[i].setAttribute('style', 'display:none');
		}
	document.getElementById(value + 'Response').setAttribute('style', 'display:block;');
}

	//Drug drop menu
function drugChange(selectEl) {
	return;
		var value = selectEl.value;
		console.log(value);

		var children = container.getElementById('drugDiv');
		for (var i = 0; i < children.length; i++) {
			children[i].setAttribute('style', 'display:none;');
		}
	document.getElementById(value + 'Response').setAttribute('style', 'display:block');
}

	//House drop menu
function houseChange(selectEl) {
	return;
		var value = selectEl.value;
		console.log(value);

		var children = container.getElementById('houseDiv');
		for (var i = 0; i < children.length; i++) {
			children[i].setAttribute('style', 'display:none;');
	}
	document.getElementById(value + 'Response').setAttribute('style', 'display:block');
}

	//calculate user score
function calculateHood() {
	//Question values
	var userScore = 0;
	var form = document.sfHood;
	//Gets and adds user value score
		userScore += parseInt(getGroupValue('sex'));
		userScore += parseInt(getGroupValue('sexO'));
		userScore += parseInt(getGroupValue('ethnic'));
		userScore += parseInt(getGroupValue('drink'));
		userScore += parseInt(getGroupValue('drug'));
		userScore += parseInt(getGroupValue('student'));
		userScore += parseInt(getGroupValue('employ'));
		userScore += parseInt(getGroupValue('job'));
		userScore += parseInt(getGroupValue('starter'));
		userScore += parseInt(getGroupValue('non'));
		userScore += parseInt(getGroupValue('house'));
		userScore += parseInt(getGroupValue('mates'));
		userScore += parseInt(getGroupValue('parents'));

	//Userscore / determines neighborhood
	if (userScore >= 220) {
		newNeighborhood = 'Castro';
		fileName = 'hoods/test.html';
	} else if (userScore >= 200) {
		newNeighborhood = 'Noe Valley';
		fileName = 'hoods/test.html';
	} else if (userScore >= 180) {
		newNeighborhood = 'Pacific Heights';
		fileName = 'hoods/test.html';
	} else if (userScore >= 160) {
		newNeighborhood = 'Twin Peaks';
		fileName = 'hoods/test.html';
	} else if (userScore >= 140) {
		newNeighborhood = 'Mission';
		fileName = 'hoods/test.html';
	} else if (userScore >= 120) {
		newNeighborhood = 'Haight';
		fileName = 'hoods/test.html';
	} else if (userScore >= 100) {
		newNeighborhood = 'Sunset';
		fileName = 'hoods/test.html';
	} else if (userScore >= 80) {
		newNeighborhood = 'Richmond';
		fileName = 'hoods/test.html';
	} else if (userScore >= 60) {
		newNeighborhood = 'Portrero Hill';
		fileName = 'hoods/test.html';
	} else if (userScore >= 40) {
		newNeighborhood = 'SOMA';
		fileName = 'hoods/test.html';
	} else if (userScore >= 0) {
		newNeighborhood = 'Tenderloin';
		fileName = 'hoods/test.html';
	//Opens corresponding page
	window.open(fileName, newNeighborhood);

	}
}


//Validation
function validate() {
	var errors = false;
		//validate form
		var form = document.sfHood;
		console.log(sfHood.elements);

	if(!form.elements.sex.value) {
		//sex validation
		alert('enter your sex!');
		errors = true;
	}

	if(!form.elements.sexO.value) {
		alert('enter your sexual orientation!');
		errors = true;
	}

	if(!form.elements.ethnic.value) {
		//ethnicity validation
		alert('enter your ethnicity!');
		errors = true;
	}

	if(!form.elements.drink.value) {
		//drink validation
		alert('enter your favorite drink!');
		errors = true;
	}
	if(!form.elements.drug.value) {
		//drug validation
		alert('enter your favorite drug!');
		errors = true;
	}
	if(!form.elements.student.value) {
		//student validation
		alert('enter if you are a student!');
		errors = true;
	}
	if(!form.elements.employ.value) {
		//employed validation
		alert('enter if you are employed!');
		errors = true;
	}
	if(!form.elements.job.value) {
		//job validation
		alert('enter your job!');
		errors = true;
	}
	if(!form.elements.starter.value) {
		//start up validation
		alert('enter if you work for a start up!');
		errors = true;
	}
	if(!form.elements.non.value) {
		//non profit validation
		alert('enter if you work for a non profit!');
		errors = true;
	}
	if(!form.elements.house.value) {
		//housing validation
		alert('enter what type of housing you live in!');
		errors = true;
	}
	if(!form.elements.mates.value) {
		//roomate validation
		alert('enter if you live with roomates!'); 
		errors = true;
	}
	if(!form.elements.parents.value) {
		//parent validation
		alert('enter if you live with your parents!');
		errors = true;
	}
		//if all peramters are not met it will alert user to fill the required section out.
	if (errors) {
		return false;
		//if all peramters have been met, it will give user their neighborhood.	
	} else {
		calculateHood();
	}
}
