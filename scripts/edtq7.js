function getEdtq7Form() {
    return `
        <h3>EDTQ-7 Questionnaire</h3>
        <form id="edtq7Form">
            ${generateEdtq7Questions()}
            <button type="button" onclick="calculateEdtq7()">Calculate Score</button>
        </form>
    `;
}

function generateEdtq7Questions() {
    return `
        <div class="question-row">
            <label>A sensation of fullness in the ear:</label>
            <input type="range" min="0" max="4" step="1" value="0" id="fullness" oninput="document.getElementById('fullnessValue').textContent = this.value">
            <p><span id="fullnessValue">0</span></p>
        </div>
        <div class="question-row">
            <label>A sensation of "popping" in the ear:</label>
            <input type="range" min="0" max="4" step="1" value="0" id="popping" oninput="document.getElementById('poppingValue').textContent = this.value">
            <p><span id="poppingValue">0</span></p>
        </div>
        <div class="question-row">
            <label>A sensation of discomfort in the ear:</label>
            <input type="range" min="0" max="4" step="1" value="0" id="discomfort" oninput="document.getElementById('discomfortValue').textContent = this.value">
            <p><span id="discomfortValue">0</span></p>
        </div>
        <div class="question-row">
            <label>A sensation of muffled hearing:</label>
            <input type="range" min="0" max="4" step="1" value="0" id="muffled" oninput="document.getElementById('muffledValue').textContent = this.value">
            <p><span id="muffledValue">0</span></p>
        </div>
        <div class="question-row">
            <label>Difficulty hearing:</label>
            <input type="range" min="0" max="4" step="1" value="0" id="hearingDifficulty" oninput="document.getElementById('hearingDifficultyValue').textContent = this.value">
            <p><span id="hearingDifficultyValue">0</span></p>
        </div>
        <div class="question-row">
            <label>A sensation of imbalance or dizziness:</label>
            <input type="range" min="0" max="4" step="1" value="0" id="dizziness" oninput="document.getElementById('dizzinessValue').textContent = this.value">
            <p><span id="dizzinessValue">0</span></p>
        </div>
        <div class="question-row">
            <label>Overall discomfort due to ear symptoms:</label>
            <input type="range" min="0" max="4" step="1" value="0" id="overallDiscomfort" oninput="document.getElementById('overallDiscomfortValue').textContent = this.value">
            <p><span id="overallDiscomfortValue">0</span></p>
        </div>
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

    let interpretationText = '';
    if (totalScore <= 7) {
        interpretationText = "Mild Eustachian tube dysfunction.";
    } else if (totalScore <= 14) {
        interpretationText = "Moderate Eustachian tube dysfunction.";
    } else {
        interpretationText = "Severe Eustachian tube dysfunction.";
    }

    showResult(`EDTQ-7 Score: ${totalScore}`, interpretationText, detailedText);
}
