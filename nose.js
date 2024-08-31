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
        <input type="number" min="0" max="10" id="nasalCongestion" value="0"> Severity (0-10)<br>
        <label>Nasal obstruction or blockage:</label>
        <input type="number" min="0" max="10" id="nasalObstruction" value="0"> Severity (0-10)<br>
        <label>Trouble breathing through the nose:</label>
        <input type="number" min="0" max="10" id="breathingTrouble" value="0"> Severity (0-10)<br>
        <label>Trouble sleeping:</label>
        <input type="number" min="0" max="10" id="sleepingTrouble" value="0"> Severity (0-10)<br>
        <label>Unable to get enough air through the nose during exercise or exertion:</label>
        <input type="number" min="0" max="10" id="exerciseTrouble" value="0"> Severity (0-10)<br>
    `;
}

function calculateNose() {
    let totalScore = 0;
    const formElements = ["nasalCongestion", "nasalObstruction", "breathingTrouble", "sleepingTrouble", "exerciseTrouble"];
    formElements.forEach(id => {
        totalScore += parseInt(document.getElementById(id).value);
    });
    showResult(`Nasal Obstruction Symptom Evaluation Score: ${totalScore}`);
}
