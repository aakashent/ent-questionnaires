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

document.addEventListener('DOMContentLoaded', function () {
    const resultsPanel = document.querySelector('.results-panel');

    function updateResultsPanelPosition() {
        if (window.innerWidth > 960) {
            // Desktop behavior
            resultsPanel.style.position = 'sticky';
            resultsPanel.style.top = '20px';
            resultsPanel.style.bottom = '';
            resultsPanel.style.transform = '';
        } else {
            // Mobile behavior
            resultsPanel.style.position = 'sticku';
            resultsPanel.style.bottom = '0';
            resultsPanel.style.top = '';  // Clear the top
            resultsPanel.style.width = '100%';
            resultsPanel.style.transform = 'translateY(calc(100% - 60px))';  // Ensure it's collapsed
            //resultsPanel.style.backgroundColor = 'red';
        }
    }

    window.addEventListener('resize', updateResultsPanelPosition);
    updateResultsPanelPosition();  // Ensure the correct behavior is applied on load

    // Expand results panel on mobile when scrolled to the bottom of the questionnaire
    document.addEventListener('scroll', function () {
        if (window.innerWidth <= 960) {
            const lastQuestion = document.querySelector('.questionnaire-list .slider-question-row:last-child, .questionnaire-list .question-row:last-child');

            if (!lastQuestion) return;

            const lastQuestionBottom = lastQuestion.getBoundingClientRect().bottom;
            const viewportHeight = window.innerHeight;

            if (lastQuestionBottom <= viewportHeight - 100) {
                resultsPanel.classList.add('expanded');
            } else {
                resultsPanel.classList.remove('expanded');
            }
        }
    });

    // Hide results panel on mobile until a questionnaire is selected
    dropdown.addEventListener('change', function() {
        if (window.innerWidth <= 950) { // Ensure we are on mobile
            if (this.value) { // If a valid selection is made
                resultsPanel.style.display = 'block'; // Show the results panel
            } else {
                resultsPanel.style.display = 'none'; // Hide if no selection
            }
        }
    });

    // Optional: Handle window resize to hide the panel if resized to mobile without a selection
    window.addEventListener('resize', function() {
        if (window.innerWidth <= 950 && !dropdown.value) {
            resultsPanel.style.display = 'none';
        }
    });
    
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

