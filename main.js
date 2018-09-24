
const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
};

const wordOutput = () => {
    const inputText = document.getElementById('inputWords').value;
    let typedWords = inputText.split('');
    let stringBuilder = '';
    for (let i = 0; i < typedWords.length; i++) {
        stringBuilder += typedWords[i];
    }

    printToDom(inputText,'codedSecret');
};

const secretButton = document.getElementById('firstButton');
secretButton.addEventListener("click", wordOutput);

