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
        <input type="number" min="0" max="4" id="fullness" value="0"><br>
        <label>A sensation of "popping" in the ear:</label>
        <input type="number" min="0" max="4" id="popping" value="0"><br>
        <label>A sensation of discomfort in the ear:</label>
        <input type="number" min="0" max="4" id="discomfort" value="0"><br>
        <label>A sensation of muffled hearing:</label>
        <input type="number" min="0" max="4" id="muffled" value="0"><br>
        <label>Difficulty hearing:</label>
        <input type="number" min="0" max="4" id="hearingDifficulty" value="0"><br>
        <label>A sensation of imbalance or dizziness:</label>
        <input type="number" min="0" max="4" id="dizziness" value="0"><br>
        <label>Overall discomfort due to ear symptoms:</label>
        <input type="number" min="0" max="4" id="overallDiscomfort" value="0"><br>
    `;
}

function calculateEdtq7() {
    let totalScore = 0;
    const formElements = ["fullness", "popping", "discomfort", "muffled", "hearingDifficulty", "dizziness", "overallDiscomfort"];
    formElements.forEach(id => {
        totalScore += parseInt(document.getElementById(id).value);
    });
    showResult(`EDTQ-7 Score: ${totalScore}`);
}
