var boxId=[null];
var tabs;
var randomiseClicked="false";
function clicked(x){
    var i , j;
    boxId.push(x);
    document.getElementById(x).style.opacity = "0.3" ;
    if(boxId.length == 3){ 
        if(boxId[1]==boxId[2]){
            document.getElementById(boxId[1]).style.opacity = "1";
            boxId=[null];
        }
        else{
            console.log("you were doing great");
        }
    }
    else if(boxId.length == 4){
        if( boxId[3] == boxId[1] ) {
            document.getElementById(boxId[1]).style.opacity = "1";
            var tempId;
            tempId=boxId[2];
            boxId=[null, tempId];
        }
        else if ( boxId[3] == boxId[2] ) {
            document.getElementById(boxId[2]).style.opacity = "1";
            tempId=boxId[1];
            boxId.pop();
            boxId.pop();
        }
        else {
            alert("only two tabs should be selected for swapping!!");
            boxId=[null];
            for (i = 0; i < 9; i++) {
            document.getElementById(i+1).style.opacity= "1";
        }
        }
    }
    
    else if (boxId.length>4){
        alert("only two tabs should be selected for swapping!!");
        boxId=[null];
        for (i = 0; i < 9; i++) {
            document.getElementById(i+1).style.opacity= "1";
        }
    }
}



function randomise() {
    randomiseClicked="true";
    boxId=[null];
    var length = 9, tempIndex, i,j, array, tempValue;
    array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (length = 9; length >= 1; --length) {
        tempIndex = Math.floor(Math.random() * length);
        tempValue = array[tempIndex];
        array[tempIndex] = array[length - 1];
        array[length - 1] = tempValue;
    }
    tabs=array;
    for (i = 0; i < 9; i++) {
        document.getElementById(i+1).textContent = array[i];
        document.getElementById(i+1).style.opacity= "1";
    }
    document.getElementById("playAgain").innerHTML="RANDOMISE AGAIN!!";
    backgroundChanger(tabs);
}


function backgroundChanger(tabs){
    var i;
    for(i=0;i<9;i++){
        if (tabs[i]==1 || tabs[i]==2 || tabs[i]==3){
            document.getElementById(i+1).style.backgroundColor="red";
        }
        if (tabs[i]==4 || tabs[i]==5 || tabs[i]==6){
            document.getElementById(i+1).style.backgroundColor="blue";         
        }
        if (tabs[i]==7 || tabs[i]==8 || tabs[i]==9){
            document.getElementById(i+1).style.backgroundColor="green";
        }
    }
}


function animate(){
    colorOut(boxId);
    colorIn(boxId);
}



function colorOut (boxId){
    console.log("colorOut function is called");
    var id = setInterval(frame, 5);
    var borderWidth = 0;
    function frame() {
        if (document.getElementById(boxId[1]).style.borderWidth == "60px") {
            console.log("colorOut function completed");
            clearInterval(id);
        } 
        else {
            borderWidth=borderWidth+0.5;
            console.log("colorOut animation started");
            document.getElementById(boxId[1]).style.borderWidth = borderWidth + "px";
            document.getElementById(boxId[2]).style.borderWidth = borderWidth + "px";
            console.log(document.getElementById(boxId[2]).style.borderWidth);
    }
}
}


function colorIn (boxId){
    console.log("colorIn function is called");
    var id = setInterval(frame, 5);
    var borderWidth = 60;
    function frame() {
        if (document.getElementById(boxId[1]).style.borderWidth == "0px") {
            console.log("colorIn function completed");
            clearInterval(id);
        } 
        else {
            console.log("colorIn animation started");
            document.getElementById(boxId[1]).style.borderWidth = borderWidth + "px";
            document.getElementById(boxId[2]).style.borderWidth = borderWidth + "px";
            console.log(document.getElementById(boxId[2]).style.borderWidth);
            borderWidth = borderWidth-0.5;
    }
}
}


function swap() {

    if(randomiseClicked=="false"){
        boxId=[null];
        for (i = 0; i < 9; i++) {
            document.getElementById(i+1).style.opacity= "1";
        }
        alert("To start the game click RANDOMISE!!");
    }

    else if(boxId.length==1 || boxId.length==2){
        alert("you need to select two tabs to perform a swap operation!!");
    }
    else{
        var temp, matches=0;
        document.getElementById(boxId[1]).innerHTML = tabs[boxId[2]-1];
        document.getElementById(boxId[2]).innerHTML = tabs[boxId[1]-1];
        animate();
        temp=tabs[boxId[1]-1];
        tabs[boxId[1]-1]=tabs[boxId[2]-1];
        tabs[boxId[2]-1]=temp;
        for (i = 0; i < 9; i++) {
            document.getElementById(i+1).style.opacity= "1";
            if(tabs[i]==i+1){
                matches++;
            }
        }
        if(matches==9){
            alert("congo!!You completed the game");
            document.getElementById("playAgain").innerHTML="PLAY AGAIN!!";
            randomiseClicked="false";
        }
        backgroundChanger(tabs);
        boxId=[null];
    }

}