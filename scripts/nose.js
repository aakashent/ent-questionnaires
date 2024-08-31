function getNoseForm() {
    return `
        <h3>Nasal Obstruction Symptom Evaluation</h3>
        <form id="noseForm">
            ${generateNoseQuestions()}
            <button type="button" onclick="calculateNose()">Calculate Score</button>
        </form>
    `;
}

function generateNoseQuestions() {
    return `
        <div class="question-row">
            <label>Nasal congestion or stuffiness:</label>
            <input type="range" min="0" max="10" step="1" value="0" id="nasalCongestion" oninput="document.getElementById('nasalCongestionValue').textContent = this.value">
            <p><span id="nasalCongestionValue">0</span></p>
        </div>
        <div class="question-row">
            <label>Nasal obstruction or blockage:</label>
            <input type="range" min="0" max="10" step="1" value="0" id="nasalObstruction" oninput="document.getElementById('nasalObstructionValue').textContent = this.value">
            <p><span id="nasalObstructionValue">0</span></p>
        </div>
        <div class="question-row">
            <label>Trouble breathing through the nose:</label>
            <input type="range" min="0" max="10" step="1" value="0" id="breathingTrouble" oninput="document.getElementById('breathingTroubleValue').textContent = this.value">
            <p><span id="breathingTroubleValue">0</span></p>
        </div>
        <div class="question-row">
            <label>Trouble sleeping:</label>
            <input type="range" min="0" max="10" step="1" value="0" id="sleepingTrouble" oninput="document.getElementById('sleepingTroubleValue').textContent = this.value">
            <p><span id="sleepingTroubleValue">0</span></p>
        </div>
        <div class="question-row">
            <label>Unable to get enough air through the nose during exercise or exertion:</label>
            <input type="range" min="0" max="10" step="1" value="0" id="exerciseTrouble" oninput="document.getElementById('exerciseTroubleValue').textContent = this.value">
            <p><span id="exerciseTroubleValue">0</span></p>
        </div>
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

    let interpretationText = '';
    if (totalScore <= 25) {
        interpretationText = "Mild nasal obstruction.";
    } else if (totalScore <= 50) {
        interpretationText = "Moderate nasal obstruction.";
    } else {
        interpretationText = "Severe nasal obstruction.";
    }

    showResult(`Nasal Obstruction Symptom Evaluation Score: ${totalScore}`, interpretationText, detailedText);
}
