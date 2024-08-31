function loadScoreForm() {
    const scoreType = document.getElementById("scoreType").value;
    const scoreForm = document.getElementById("scoreForm");
    scoreForm.innerHTML = ""; // Clear previous form

    const resultDiv = document.getElementById("result");
    resultDiv.style.display = "none"; // Hide previous result when switching forms

    switch (scoreType) {
        case "epworth":
            scoreForm.innerHTML = getEpworthForm();
            break;
        case "stopbang":
            scoreForm.innerHTML = getStopBangForm();
            break;
        case "nose":
            scoreForm.innerHTML = getNoseForm();
            break;
        case "edtq7":
            scoreForm.innerHTML = getEdtq7Form();
            break;
    }
}

function showResult(resultText, detailedText) {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = ''; // Clear previous result content

    const scoreResult = document.createElement('p');
    scoreResult.id = 'scoreResult';
    scoreResult.textContent = resultText;

    const detailedResult = document.createElement('div');
    detailedResult.id = 'detailedResult';
    detailedResult.innerHTML = detailedText;

    resultDiv.appendChild(scoreResult);
    resultDiv.appendChild(detailedResult);
    resultDiv.appendChild(createCopyButtons());

    resultDiv.style.display = "block";
}

function createCopyButtons() {
    const copyButtonsDiv = document.createElement('div');
    copyButtonsDiv.id = 'copyButtons';

    const copyResultButton = document.createElement('button');
    copyResultButton.textContent = "Copy Result Only";
    copyResultButton.onclick = () => copyToClipboard(true);

    const copyDetailedButton = document.createElement('button');
    copyDetailedButton.textContent = "Copy Detailed Report";
    copyDetailedButton.onclick = () => copyToClipboard(false);

    copyButtonsDiv.appendChild(copyResultButton);
    copyButtonsDiv.appendChild(copyDetailedButton);

    return copyButtonsDiv;
}

function copyToClipboard(resultOnly = true) {
    const scoreResult = document.getElementById("scoreResult").textContent;
    const detailedResult = document.getElementById("detailedResult").innerHTML.replace(/<br>/g, '\n');

    const textToCopy = resultOnly ? scoreResult : `${detailedResult}\n\n${scoreResult}`;
    
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert("Result copied to clipboard!");
    });
}
