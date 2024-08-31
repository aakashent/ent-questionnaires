// script.js

function loadScoreForm() {
    const scoreType = document.getElementById("scoreType").value;
    const scoreFormContainer = document.getElementById("scoreForm");
    const resultContainer = document.getElementById("result");

    // Clear previous form and results
    scoreFormContainer.innerHTML = "";
    resultContainer.style.display = "none";
    document.getElementById("scoreResult").textContent = "";
    document.getElementById("interpretation").textContent = "";

    switch (scoreType) {
        case "epworth":
            scoreFormContainer.innerHTML = getEpworthForm();
            calculateEpworth(); // Initialize calculation
            resultContainer.style.display = "block";
            break;
        case "stopbang":
            scoreFormContainer.innerHTML = getStopBangForm();
            calculateStopBang(); // Initialize calculation
            resultContainer.style.display = "block";
            break;
        case "nose":
            scoreFormContainer.innerHTML = getNoseForm();
            calculateNose(); // Initialize calculation
            resultContainer.style.display = "block";
            break;
        case "edtq7":
            scoreFormContainer.innerHTML = getEdtq7Form();
            calculateEdtq7(); // Initialize calculation
            resultContainer.style.display = "block";
            break;
        default:
            break;
    }
}

function showResult(resultText, interpretationText, detailedText) {
    document.getElementById("scoreResult").textContent = resultText;
    document.getElementById("interpretation").textContent = interpretationText;
    document.getElementById("detailedResult").value = detailedText; // Hidden input for copying
}

function copyToClipboard(resultOnly = true) {
    const resultText = document.getElementById("scoreResult").textContent;
    const detailedText = document.getElementById("detailedResult").value;
    const textToCopy = resultOnly ? resultText : `${detailedText}\n${resultText}`;

    navigator.clipboard.writeText(textToCopy).then(() => {
        alert("Copied to clipboard!");
    });
}
