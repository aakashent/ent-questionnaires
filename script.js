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

document.addEventListener('scroll', function () {
    const resultsPanel = document.querySelector('.results-panel');

    // Only apply the scroll behavior on mobile (max-width: 768px)
    if (window.innerWidth <= 768) {
        const lastQuestion = document.querySelector('.questionnaire-list .slider-question-row:last-child, .questionnaire-list .question-row:last-child');

        if (!lastQuestion) return; // Safeguard in case there's no last question found

        const lastQuestionBottom = lastQuestion.getBoundingClientRect().bottom;
        const viewportHeight = window.innerHeight;

        // Adjust the +20 value to slightly delay the results panel expansion after the last question
        if (lastQuestionBottom <= viewportHeight + 40) {
            resultsPanel.classList.add('expanded');
        } else {
            resultsPanel.classList.remove('expanded');
        }
    }
});

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

