
/*
    Done -- Take the value from the user and store it inside the variable name guessNumber
    Done -- generate a random number from 0 to 100 in a function
    Done -- Check the guess number is too hogh to low or equal
    Done    -- Create a function and move the guess number logic to that function to make your
           login dynamic
    Done   -- Todo Create a Function that display your guess is too hight
    Done   -- Todo create a function that display your guess is to low
    Done   -- Todo create a function that display you won the game
    TODO   -- Create a function that show the list of guess done by person or input field

*/
let guessNumberData = [];

let randomNumber = generateRandomNumber();
window.onload = function(){
    document.getElementById("number-check").addEventListener("click",playGame);
    document.getElementById("number-reset").addEventListener("click",resetGame);
    //youWinGame();
}
function resetInput(){
    let guessNumber = document.getElementById("random-number-input").value = "";
    return guessNumber;
}


function playGame(){
    let guessNumber = document.getElementById("random-number-input").value;
    displayResult(guessNumber);
    saveGuestHistory(guessNumber);
    saveSearchHistory();
}
function resetGame(){
    resetInput();
    document.getElementById("result").innerHTML = "";
    document.getElementById("history").innerHTML = "";
}


function generateRandomNumber(){
    let generatedNumber = Math.floor(Math.random() * 101);
    return generatedNumber;
}

function displayResult(guessNumber){
    console.log(randomNumber);
    if(guessNumber > randomNumber){
        highScore();
    }else if(guessNumber < randomNumber){
        lowScore();
    }else{
        youWinGame();
    }
}

function getDialogType(dialogType,text){
    let dialogBox;
    switch(dialogType){
        case "warning":
        dialogBox = "<div class='alert alert-warning' role='alert'>" 
        break;
        case "won":
        dialogBox = "<div class='alert alert-success' role='alert'>" 
        break;
    }
        dialogBox+=text;
        dialogBox+="</div>";
        return dialogBox;
}
function youWinGame(){
    const text = "Awesome! You guess the number";
    let dialog = getDialogType("won",text);
    document.getElementById("result").innerHTML = dialog;
}

function highScore(){
    const text = "You guess is too high";
    let dialog = getDialogType("warning",text);
    document.getElementById("result").innerHTML = dialog;
}

// Function to display the low score based on user input
function lowScore(){
    const text = "You guess is too low";
    let dialog = getDialogType("warning",text);
    document.getElementById("result").innerHTML = dialog;
}
// Save the search items inside the array
function saveGuestHistory(guessNumber){
    guessNumberData.push(guessNumber);
   
}
// Save Number of inputs that is entered by user.
function saveSearchHistory(){
    let list = "<ul class='list-group'>"
    guessNumberData.slice().reverse().forEach(function(currentValue,index){
        list   +="<li class='list-group-item'>";
        list   += "You guessed "+currentValue;
        list   +="</li>";
        guessNumberData.reverse();
    });
    list   +="</ul>"; 
    document.getElementById("history").innerHTML = list;
    document.getElementById("random-number-input").value = "";
}



