
const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
};


const output = '';


const wordOutput = () => {
    const inputText = document.getElementById('textArea').value;
    let inputWords = inputText.split(' ');
    for (let i = 0; i < inputWords.length; i++) {
        let output = inputWords[i];
    }
    printToDom(inputText,'firstButton');
};

const secretButton = document.getElementById('firstButton');
secretButton.addEventListener("click", inputWords);