function getNoseForm() {
    return `
        <h3>Nasal Obstruction Symptom Evaluation</h3>
        ${generateNoseQuestions()}
        <button type="button" onclick="calculateNose()">Calculate Score</button>
    `;
}

function generateNoseQuestions() {
    return `
        <label>Nasal congestion or stuffiness:</label>
        <input type="range" min="0" max="10" step="1" value="0" id="nasalCongestion">
        <p>Value: <span id="nasalCongestionValue">0</span></p>

        <label>Nasal obstruction or blockage:</label>
        <input type="range" min="0" max="10" step="1" value="0" id="nasalObstruction">
        <p>Value: <span id="nasalObstructionValue">0</span></p>

        <label>Trouble breathing through the nose:</label>
        <input type="range" min="0" max="10" step="1" value="0" id="breathingTrouble">
        <p>Value: <span id="breathingTroubleValue">0</span></p>

        <label>Trouble sleeping:</label>
        <input type="range" min="0" max="10" step="1" value="0" id="sleepingTrouble">
        <p>Value: <span id="sleepingTroubleValue">0</span></p>

        <label>Unable to get enough air through the nose during exercise or exertion:</label>
        <input type="range" min="0" max="10" step="1" value="0" id="exerciseTrouble">
        <p>Value: <span id="exerciseTroubleValue">0</span></p>

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

function calculateNose() {
    let totalScore = 0;
    const formElements = ["nasalCongestion", "nasalObstruction", "breathingTrouble", "sleepingTrouble", "exerciseTrouble"];
    let detailedText = "";

    formElements.forEach(id => {
        const value = parseInt(document.getElementById(id).value);
        totalScore += value;
        detailedText += `<strong>${id.replace(/([A-Z])/g, ' $1')}:</strong> ${value}<br>`;
    });

    showResult(`Nasal Obstruction Symptom Evaluation Score: ${totalScore}`, detailedText);
}
