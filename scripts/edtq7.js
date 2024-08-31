function getEdtq7Form() {
    return `
        <h3>EDTQ-7 Questionnaire</h3>
        ${generateEdtq7Questions()}
        <button type="button" onclick="calculateEdtq7()">Calculate Score</button>
    `;
}

function generateEdtq7Questions() {
    return `
        <label>A sensation of fullness in the ear:</label>
        <input type="range" min="0" max="4" step="1" value="0" id="fullness">
        <p>Value: <span id="fullnessValue">0</span></p>

        <label>A sensation of "popping" in the ear:</label>
        <input type="range" min="0" max="4" step="1" value="0" id="popping">
        <p>Value: <span id="poppingValue">0</span></p>

        <label>A sensation of discomfort in the ear:</label>
        <input type="range" min="0" max="4" step="1" value="0" id="discomfort">
        <p>Value: <span id="discomfortValue">0</span></p>

        <label>A sensation of muffled hearing:</label>
        <input type="range" min="0" max="4" step="1" value="0" id="muffled">
        <p>Value: <span id="muffledValue">0</span></p>

        <label>Difficulty hearing:</label>
        <input type="range" min="0" max="4" step="1" value="0" id="hearingDifficulty">
        <p>Value: <span id="hearingDifficultyValue">0</span></p>

        <label>A sensation of imbalance or dizziness:</label>
        <input type="range" min="0" max="4" step="1" value="0" id="dizziness">
        <p>Value: <span id="dizzinessValue">0</span></p>

        <label>Overall discomfort due to ear symptoms:</label>
        <input type="range" min="0" max="4" step="1" value="0" id="overallDiscomfort">
        <p>Value: <span id="overallDiscomfortValue">0</span></p>

        <script>
        document.querySelectorAll('input[type="range"]').forEach(slider => {
            slider.addEventListener('input', (e) => {
                const valueDisplay = document.getElementById(e.target.id + 'Value');
                valueDisplay.textContent = e.target.value;
            });
        });
        </script>
    `;
}

function calculateEdtq7() {
    let totalScore = 0;
    const formElements = ["fullness", "popping", "discomfort", "muffled", "hearingDifficulty", "dizziness", "overallDiscomfort"];
    let detailedText = "";

    formElements.forEach(id => {
        const value = parseInt(document.getElementById(id).value);
        totalScore += value;
        detailedText += `<strong>${id.replace(/([A-Z])/g, ' $1')}:</strong> ${value}<br>`;
    });

    showResult(`EDTQ-7 Score: ${totalScore}`, detailedText);
}
