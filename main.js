var boxId=[null];
var tabs;
var randomiseClicked="false";
function clicked(x){
    var i , j;
    boxId.push(x);
    document.getElementById(x).style.opacity = "0.3" ;
    if(boxId[1]==boxId[2]){
        document.getElementById(boxId[1]).style.opacity = "1";
        boxId=[null];
    }
    else if(boxId[1]==boxId[3]){
        document.getElementById(boxId[1]).style.opacity = "1";
        var tempId;
        tempId=boxId[2];
        boxId=[null, tempId];
    }
    if(boxId[2]==boxId[3]){
        document.getElementById(boxId[2]).style.opacity = "1";
        tempId=boxId[1];
        boxId.pop();
        boxId.pop();
    }
    if(boxId.length>3){
        alert("only two tabs should be selected for swapping!!");
        boxId=[null];
        for (i = 0; i < 9; i++) {
            document.getElementById(i+1).style.opacity= "1";
        }
    }
}



function randomise() {
    randomiseClicked="true";
    var length = 9, tempIndex, i,j, array, tempValue;
    array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (length = 9; length >= 1; --length) {
        tempIndex = Math.floor(Math.random() * length);
        tempValue = array[tempIndex];
        array[tempIndex] = array[length - 1];
        array[length - 1] = tempValue;
    }
    for (i = 0; i < 9; i++) {
        document.getElementById(i+1).textContent = array[i];
        tabs=array;
        document.getElementById(i+1).style.opacity= "1";
    }
    document.getElementById("playAgain").innerHTML="RANDOMISE AGAIN!!";
}

function swap() {

    if(randomiseClicked=="false"){
        alert("To start the game click RANDOMISE!!");
    }

    else if(boxId.length==1 || boxId.length==2){
        alert("you need to select two tabs to perform a swap operation!!");
    }
    else{
        var temp, matches=0;
        document.getElementById(boxId[1]).innerHTML = tabs[boxId[2]-1];
        document.getElementById(boxId[2]).innerHTML = tabs[boxId[1]-1];
        temp=tabs[boxId[1]-1];
        tabs[boxId[1]-1]=tabs[boxId[2]-1];
        tabs[boxId[2]-1]=temp;
        for (i = 0; i < 9; i++) {
            document.getElementById(i+1).style.opacity= "1";
            if(tabs[i]==i+1){
                matches++;
            }
            console.log(matches);
        }
        if(matches==9){
            alert("congo!!You completed the game");
            document.getElementById("playAgain").innerHTML="PLAY AGAIN!!";
            randomiseClicked="false";
        }
        boxId=[null];
    }

}
