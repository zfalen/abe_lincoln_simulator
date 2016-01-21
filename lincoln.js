
var xCoord = 0;
var yCoord = 0;

var newCellID = submitButton();



window.addEventListener("keydown", moveSomething, false);
function moveSomething(e) {
	switch(e.keyCode) {
		case 37:
            unSetID();
            yCoord -= 1;
            offBoard();
            setID();
			break;
		case 38:
            unSetID();
            xCoord -= 1;
            offBoard();
            setID();
			break;
		case 39:
			unSetID();
            yCoord += 1;
            offBoard();
            setID();
			break;
		case 40:
			unSetID();
            xCoord += 1;
            offBoard();
            setID();
			break;	
	}	
    quiz();
    win();
}


function submitButton(){
    
    if(document.getElementById("directionInput").value === "right"){
        unSetID();
        yCoord += 1;
        offBoard();
        setID();
    }
    
    else if(document.getElementById("directionInput").value === "down"){
        unSetID();
        xCoord += 1;
        offBoard();
        setID();
    }
    
    else if(document.getElementById("directionInput").value === "left"){
        unSetID();
        yCoord -= 1;
        offBoard();
        setID();
    }
    
    else if(document.getElementById("directionInput").value === "up"){
        unSetID();
        xCoord -= 1;
        offBoard();
        setID();
    } 
    quiz();
    win();
}

function resetAll (){
    unSetID;
    yCoord = 0;
    xCoord = 0;
    document.getElementById('c00').className = "abe";
    document.getElementById('c01').className = "theater";
    document.getElementById('c12').className = "theater";
    document.getElementById('c20').className = "theater";
    document.getElementById('c10').className = "bull";
    document.getElementById('c11').className = "gettysburg";
    document.getElementById('c21').className = "confederate";
    document.getElementById('c22').className = "scroll";
}


function win (){
    if(xCoord == 2 && yCoord == 2){
        alert("Abraham Lincoln has United the States! YOU WIN!");
        resetAll();
    }
}

function quiz (){
    // lose
    if(xCoord == 1 && yCoord == 2){
        alert("Oh no Abe! Your nice night at the theater went off with a 'bang!' You died.");
        resetAll();
    }
    if(xCoord == 0 && yCoord == 1){
        alert("Oh no Abe! Your nice night at the theater went off with a 'bang!' You died.");
        resetAll();
    }
    if(xCoord == 2 && yCoord == 0){
        alert("Oh no Abe! Your nice night at the theater went off with a 'bang!' You died.");
        resetAll();
    }
    
    // continue
    if(xCoord == 1 && yCoord == 0){
        alert("You lost the Battle of Bull Run. You better work harder, Abe!");
        unSetID();
        setID();
    }
    if(xCoord == 1 && yCoord == 1){
        alert("The Battle of Gettysburg was bloody - but the Union wins! Give a famous speech, or something.");
        unSetID();
        setID();
    }
     if(xCoord == 2  && yCoord == 1){
        alert("General Sherman busted up a bunch of Rebels in Georgia. Yeah Sherman!!");
        unSetID();
        setID();
     }
}

function offBoard (){
    if (xCoord <= -1) {
        xCoord = 0;
        alert("Don't leave the States, Abe! The people must be emancipated!");
    }
    else if (yCoord <= -1) {
        yCoord = 0;
        alert("Don't leave the States, Abe! The people must be emancipated!");
    }
    else if (xCoord >= 3) {
        xCoord = 2;
        alert("Don't leave the States, Abe! The people must be emancipated!");
    }
    else if (yCoord >= 3) {
        yCoord = 2;
        alert("Don't leave the States, Abe! The people must be emancipated!");
    }
}


// ----------------CONSTRUCTOR FUNCTION-----------------------

var unSetID = function(){
    var id = 'c' + xCoord + yCoord;
    document.getElementById(id).className = "";
}

var setID = function (){
    var id = 'c' + xCoord + yCoord;
    document.getElementById(id).className = "abe";
}

var resetID = function (){
    unSetID();
    xCoord = 0;
    yCoord = 0;
    document.getElementById('c00').className = "abe";
}


var currentPosition = function (xCoord, yCoord){
    this.xCoord = xCoord;
    this.yCoord = yCoord;
}

var newPosition = function (currentPosition){
    function moveSomething(e) {
	   switch(e.keyCode) {
		case 37:
            unSetID();
            yCoord -= 1;
            offBoard();
            setID();
			break;
		case 38:
            unSetID();
            xCoord -= 1;
            offBoard();
            setID();
			break;
		case 39:
			unSetID();
            yCoord += 1;
            offBoard();
            setID();
			break;
		case 40:
			unSetID();
            xCoord += 1;
            offBoard();
            setID();
			break;	
	}	
    quiz();
    win();
}};
