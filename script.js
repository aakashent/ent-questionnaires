// script.js

function loadScoreForm() {
    const scoreType = document.getElementById("scoreType").value;
    const scoreFormContainer = document.getElementById("scoreForm");
    const resultContainer = document.getElementById("result");

    // Clear previous form and results
    scoreFormContainer.innerHTML = "";
    document.getElementById("scoreResult").textContent = "";
    document.getElementById("interpretation").textContent = "";

    // Display the result container initially hidden
    resultContainer.style.display = "block";

    switch (scoreType) {
        case "epworth":
            scoreFormContainer.innerHTML = getEpworthForm();
            calculateEpworth(); // Initialize calculation for Epworth
            break;
        case "stopbang":
            scoreFormContainer.innerHTML = getStopBangForm();
            calculateStopBang(); // Initialize calculation for STOP-Bang
            break;
        case "nose":
            scoreFormContainer.innerHTML = getNoseForm();
            // Initialize calculation after DOM is ready
            setTimeout(() => {
                calculateNose();
            }, 0);
            break;
        case "edtq7":
            scoreFormContainer.innerHTML = getEdtq7Form();
            // Initialize calculation after DOM is ready
            setTimeout(() => {
                calculateEdtq7();
            }, 0);
            break;
        default:
            resultContainer.style.display = "none"; // Hide result if no form selected
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
