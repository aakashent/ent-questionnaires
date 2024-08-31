function getStopBangForm() {
    return `
        <div class="question-row">
            <label>Snoring:</label>
            <input type="checkbox" id="snoring" onchange="calculateStopBang()">
        </div>
        <div class="question-row">
            <label>Tiredness:</label>
            <input type="checkbox" id="tiredness" onchange="calculateStopBang()">
        </div>
        <div class="question-row">
            <label>Observed Apnoea:</label>
            <input type="checkbox" id="apnoea" onchange="calculateStopBang()">
        </div>
        <div class="question-row">
            <label>Blood Pressure:</label>
            <input type="checkbox" id="bp" onchange="calculateStopBang()">
        </div>
        <div class="question-row">
            <label>BMI > 35 kg/m²:</label>
            <input type="checkbox" id="bmi" onchange="calculateStopBang()">
        </div>
        <div class="question-row">
            <label>Age > 50:</label>
            <input type="checkbox" id="age" onchange="calculateStopBang()">
        </div>
        <div class="question-row">
            <label>Neck circumference > 40 cm:</label>
            <input type="checkbox" id="neck" onchange="calculateStopBang()">
        </div>
        <div class="question-row">
            <label>Gender:</label>
            <input type="checkbox" id="gender" onchange="calculateStopBang()"> Are you male?
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
        detailedText += `${id.charAt(0).toUpperCase() + id.slice(1)}: ${document.getElementById(id).checked ? 'Yes' : 'No'}\n`;
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
