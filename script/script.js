// DOM Variables 

let firstSideButton = document.getElementById("firstSideGrillButton"),
	secondSideButton = document.getElementById("secondSideGrillButton"),
	restartSideButton = document.getElementById("restartGrillButton"),
	timerMessage = document.getElementById("timer");
	
	

	
secondSideButton.style.display = 'none';
restartSideButton.style.display = 'none';
timerMessage.style.display = 'none';


let timeFirstSide = 0;
let timeSecondSide = 0;


firstSideButton.addEventListener('click', function(){

	firstSideGrillButton.style.display = 'none';
	timerMessage.style.display = 'block';
	determineCutFirstSide();
	determineFirstSideDonenessAndThickness();
	determineGrillTypeFirstSide();
	setTimeout(function() { secondSideButton.style.display = 'inline'; }, 2000);
	
	var timerIdFirst = setInterval(countdownOne, 1000);
	function countdownOne() {
		if (timeFirstSide > 0)
		{
			timerMessage.innerText = timeFirstSide;
			timeFirstSide--;
			
			
		}
		else  if (timeFirstSide === -1)
		{
			clearTimeout(timerIdFirst);
		}
		else
		{
			timerMessage.innerText = "Flip Your Steak!";
			timerMessage.style.fontSize = '40px';
			clearTimeout(timerIdFirst);
		}
		
    }

});


	
	
secondSideButton.addEventListener('click', function(){
	
	timeFirstSide = -1;
	secondSideButton.style.display = 'none';
	determineCutSecondSide();
	determineSecondSideDonenessAndThickness();
	determineGrillTypeSecondSide();
	
	let timerIdSecond = setInterval(countdownTwo, 1000);
	function countdownTwo() {
		if (timeSecondSide > 0)
		{
			
			timerMessage.innerText = timeSecondSide;
			timerMessage.style.fontSize = '120px';	
			timeSecondSide--;
			setTimeout(function() { restartSideButton.style.display = 'inline';}, 2000);
			
		}
		else
		{
			timerMessage.innerText = "Your Steak is Ready!";
			timerMessage.style.fontSize = '40px';
			setTimeout(function() { timerMessage.innerText = "Enjoy!";}, 4000);
			setTimeout(function() { timerMessage.style.display = 'none';},6000);
			clearTimeout(timerIdSecond);
		}
    }
	
});


restartGrillButton.addEventListener('click', function() {
	restartGrillButton.style.display = 'none';
	firstSideGrillButton.style.display = 'inline';
	location.reload();
});




let firstSideArray = [
	['Thickness', '3/4', '1', '1 1/2', '1 3/4', '2'],
	['Rare', 240, 300, 360, 360, 390],
	['Medium Rare', 240, 270, 360, 420, 450],
	['Medium', 300, 360, 420, 480, 510 ],
	['Medium Well', 360, 450, 510, 540, 570],
	['Well Done', 420, 540, 600, 600, 660]
];

let secondSideArray = [
	['Thickness', '3/4', '1', '1 1/2', '1 3/4', '2'],
	['Rare', 120, 180, 240, 300, 360],
	['Medium Rare', 210, 270, 360, 420, 420],
	['Medium', 240, 240, 360, 480, 480],
	['Medium Well', 300, 300, 420, 540, 540],
	['Well Done', 360, 360, 480, 600, 660]
];
 
let x;
let y;

function determineX() {
	if (document.getElementById("donenessRadioRare").checked)
	{
		x = 1;
	}
	else if (document.getElementById("donenessRadioMediumRare").checked)
	{
		x = 2;
	}
	else if (document.getElementById("donenessRadioMedium").checked)
	{
		x = 3;
	}
	else if (document.getElementById("donenessRadioMediumWell").checked)
	{
		x = 4;
	}
	else 
	{
		x = 5;
	}
	return x; 
}

function determineY() {
	if (document.getElementById("thicknessRadio3/4").checked)
	{
		y = 1;
	}
	else if (document.getElementById("thicknessRadio1").checked)
	{
		y = 2;
	}
	else if (document.getElementById("thicknessRadio1and1/2").checked)
	{
		y = 3;
	}
	else if (document.getElementById("thicknessRadio1and3/4").checked)
	{
		y = 4;
	}
	else
	{
		y = 5;
	}
	return y;
}

function determineFirstSideDonenessAndThickness() {
	determineX();
	determineY();
	timeFirstSide += firstSideArray[x][y];
	return timeFirstSide; 
}
function determineSecondSideDonenessAndThickness() {
	determineX();
	determineY();
	timeSecondSide += secondSideArray[x][y];
	return timeSecondSide; 
}


function determineCutFirstSide() {
	if (document.getElementById("cutRadioPorterHouse").checked)
	{
		timeFirstSide += 75;
	}
	else if (document.getElementById("cutRadioRibeye").checked || 
			 document.getElementById("cutRadioTenderloin").checked)
	{
		timeFirstSide -= 90;
	}
	else
	{
		timeFirstSide += 0;
	}
	return timeFirstSide;
}
function determineCutSecondSide() {
	if (document.getElementById("cutRadioPorterHouse").checked)
	{
		timeSecondSide += 50;
	}
	else if (document.getElementById("cutRadioRibeye").checked || 
			 document.getElementById("cutRadioTenderloin").checked)
	{
		timeSecondSide -= 60;
	}
	else
	{
		timeSecondSide += 0;
	}
	return timeSecondSide;
}

function determineGrillTypeFirstSide(){
	if (document.getElementById("grillGasTypeRadio").checked)
	{
		timeFirstSide += 45;
	}
	else if (document.getElementById("grillPanTypeRadio").checked)
	{
		timeFirstSide += 150;
	}
	else
	{
		timeFirstSide +=0;
	}
	return timeFirstSide;
}
function determineGrillTypeSecondSide(){
	if (document.getElementById("grillGasTypeRadio").checked)
	{
		timeSecondSide += 30;
	}
	else if (document.getElementById("grillPanTypeRadio").checked)
	{
		timeSecondSide += 120;
	}
	else
	{
		timeSecondSide +=0;
	}
	return timeSecondSide;
}


































