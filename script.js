// script.js

function loadScoreForm() {
    const scoreType = document.getElementById("scoreType").value;
    const scoreFormContainer = document.getElementById("scoreForm");
    const resultContainer = document.getElementById("result");

    // Clear previous form and results
    scoreFormContainer.innerHTML = "";
    document.getElementById("scoreResult").textContent = "";
    document.getElementById("interpretation").textContent = "";

    // Ensure result box is displayed when needed
    resultContainer.style.display = "none"; // Hide initially

    switch (scoreType) {
        case "epworth":
            scoreFormContainer.innerHTML = getEpworthForm();
            calculateEpworth(); // Initialize calculation for Epworth
            resultContainer.style.display = "block"; // Show result box
            break;
        case "stopbang":
            scoreFormContainer.innerHTML = getStopBangForm();
            calculateStopBang(); // Initialize calculation for STOP-Bang
            resultContainer.style.display = "block"; // Show result box
            break;
        case "nose":
            scoreFormContainer.innerHTML = getNoseForm();
            setTimeout(() => {
                calculateNose(); // Initialize calculation after DOM is ready
                resultContainer.style.display = "block"; // Show result box
            }, 0);
            break;
        case "edtq7":
            scoreFormContainer.innerHTML = getEdtq7Form();
            setTimeout(() => {
                calculateEdtq7(); // Initialize calculation after DOM is ready
                resultContainer.style.display = "block"; // Show result box
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




function copyResultOnly() {
    const scoreResult = document.getElementById('scoreResult').textContent;
    navigator.clipboard.writeText(scoreResult).then(() => {
        alert('Score copied to clipboard!');
    });
}

function copyDetailedReport() {
    const scoreResult = document.getElementById('scoreResult').textContent;
    const interpretation = document.getElementById('interpretation').textContent;
    const detailedReport = `${scoreResult}\n${interpretation}`;
    navigator.clipboard.writeText(detailedReport).then(() => {
        alert('Detailed report copied to clipboard!');
    });
}

// Sample function to dynamically update score (you will need to link this with your form inputs)
function updateScore(score) {
    const scoreResultElement = document.getElementById('scoreResult');
    scoreResultElement.textContent = `Score: ${score}`;
    
    const interpretationElement = document.getElementById('interpretation');
    // Update interpretation based on the score
    interpretationElement.textContent = score > 10 ? 'High risk' : 'Low risk';
}

