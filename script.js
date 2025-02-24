let inputText = document.getElementById("input-here");
let outputCode = document.getElementById("output-here");

let clearAll = document.getElementById("clearAllBtn");

const morseCodeChart = {
    "A": ".-", "B": "-...", "C": "-.-.", "D": "-..", "E": ".",
    "F": "..-.", "G": "--.", "H": "....", "I": "..", "J": ".---",
    "K": "-.-", "L": ".-..", "M": "--", "N": "-.", "O": "---",
    "P": ".--.", "Q": "--.-", "R": ".-.", "S": "...", "T": "-",
    "U": "..-", "V": "...-", "W": ".--", "X": "-..-", "Y": "-.--",
    "Z": "--..", "1": ".----", "2": "..---", "3": "...--", 
    "4": "....-", "5": ".....", "6": "-....", "7": "--...", 
    "8": "---..", "9": "----.", "0": "-----", " ": "/"
};

function convertTextToMorse(text){
    let convertedText = text.toUpperCase().split("").map(char => {
            return morseCodeChart[char]|| " ";
    }).join(" ");
    
    return convertedText;
}

function deleteAll(){
    outputCode.innerHTML = "";
    inputText.value = "";
}

clearAll.addEventListener("click", deleteAll)

inputText.addEventListener("input", textToMorse);

function textToMorse(){
    outputCode.textContent = convertTextToMorse(this.value)
}
