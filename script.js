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

// Updated function for sliders and clearing results
function showResult(resultText, detailedText) {
    const resultDiv = document.getElementById("result");
    const scoreResult = document.getElementById("scoreResult");
    scoreResult.textContent = resultText;
    
    const detailedResult = document.createElement('div');
    detailedResult.id = 'detailedResult';
    detailedResult.style.display = 'none';  // Hide by default
    detailedResult.innerHTML = detailedText;

    resultDiv.appendChild(detailedResult);

    resultDiv.style.display = "block";
}

function copyToClipboard(resultOnly = true) {
    const scoreResult = document.getElementById("scoreResult").textContent;
    const detailedResult = document.getElementById("detailedResult").innerHTML;

    const textToCopy = resultOnly ? scoreResult : `${detailedResult}\n\n${scoreResult}`;
    
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert("Result copied to clipboard!");
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const copyResultButton = document.createElement('button');
    copyResultButton.textContent = "Copy Result Only";
    copyResultButton.onclick = () => copyToClipboard(true);

    const copyDetailedButton = document.createElement('button');
    copyDetailedButton.textContent = "Copy Detailed Report";
    copyDetailedButton.onclick = () => copyToClipboard(false);

    const copyButtonsDiv = document.createElement('div');
    copyButtonsDiv.id = 'copyButtons';
    copyButtonsDiv.appendChild(copyResultButton);
    copyButtonsDiv.appendChild(copyDetailedButton);

    document.getElementById('result').appendChild(copyButtonsDiv);
});
