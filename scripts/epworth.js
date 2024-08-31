function getEpworthForm() {
    return `
        <h3>Epworth Sleepiness Scale</h3>
        <p>How likely are you to doze off or fall asleep in the following situations?</p>
        <form id="epworthForm">
            ${generateEpworthQuestions()}
            <button type="button" onclick="calculateEpworth()">Calculate Score</button>
        </form>
    `;
}

function generateEpworthQuestions() {
    return `
        <label>Sitting and reading:</label>
        <input type="range" min="0" max="3" step="1" value="0" id="reading">
        <p>Value: <span id="readingValue">0</span></p>
        
        <label>Watching TV:</label>
        <input type="range" min="0" max="3" step="1" value="0" id="watchingTV">
        <p>Value: <span id="watchingTVValue">0</span></p>
        
        <!-- Add similar blocks for other questions -->

        <script>
        // Update slider values
        document.querySelectorAll('input[type="range"]').forEach(slider => {
            slider.addEventListener('input', (e) => {
                const valueDisplay = document.getElementById(`${e.target.id}Value`);
                valueDisplay.textContent = e.target.value;
            });
        });
        </script>
    `;
}

function calculateEpworth() {
    let totalScore = 0;
    const formElements = ['reading', 'watchingTV']; // Add IDs of all questions
    let detailedText = "";

    formElements.forEach(id => {
        const value = parseInt(document.getElementById(id).value);
        totalScore += value;
        detailedText += `<strong>${id.replace(/([A-Z])/g, ' $1')}:</strong> ${value}<br>`;
    });

    showResult(`Epworth Sleepiness Scale: ${totalScore}`, detailedText);
}
