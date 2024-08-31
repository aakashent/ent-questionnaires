function getStopBangForm() {
    return `
        <h3>STOP-Bang Questionnaire</h3>
        <form id="stopbangForm">
            ${generateStopBangQuestions()}
            <button type="button" onclick="calculateStopBang()">Calculate Score</button>
        </form>
    `;
}

function generateStopBangQuestions() {
    return `
        <div class="question-row">
            <label>Snoring:</label>
            <input type="checkbox" id="snoring">
        </div>
        <div class="question-row">
            <label>Tiredness:</label>
            <input type="checkbox" id="tiredness">
        </div>
        <div class="question-row">
            <label>Observed Apnoea:</label>
            <input type="checkbox" id="apnoea">
        </div>
        <div class="question-row">
            <label>Blood Pressure:</label>
            <input type="checkbox" id="bp">
        </div>
        <div class="question-row">
            <label>BMI > 35 kg/m²:</label>
            <input type="checkbox" id="bmi">
        </div>
        <div class="question-row">
            <label>Age > 50:</label>
            <input type="checkbox" id="age">
        </div>
        <div class="question-row">
            <label>Neck circumference > 40 cm:</label>
            <input type="checkbox" id="neck">
        </div>
        <div class="question-row">
            <label>Gender:</label>
            <input type="checkbox" id="gender"> Are you male?
        </div>
    `;
}

function calculateStopBang() {
    let totalScore = 0;
    const stopBangElements = ["snoring", "tiredness", "apnoea", "bp", "bmi", "age", "neck", "gender"];
    let detailedText = "";

    stopBangElements.forEach(id => {
        if (document.getElementById(id).checked) {
            totalScore++;
        }
        detailedText += `<strong>${id.charAt(0).toUpperCase() + id.slice(1)}:</strong> ${document.getElementById(id).checked ? 'Yes' : 'No'}<br>`;
    });

    let interpretationText = '';
    if (totalScore <= 2) {
        interpretationText = "Low risk of OSA.";
    } else if (totalScore <= 4) {
        interpretationText = "Intermediate risk of OSA.";
    } else {
        interpretationText = "High risk of OSA.";
    }

    showResult(`STOP-Bang Score: ${totalScore}`, interpretationText, detailedText);
}
