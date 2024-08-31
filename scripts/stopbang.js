function getStopBangForm() {
    return `
        <h3>STOP-Bang Questionnaire</h3>
        ${generateStopBangQuestions()}
        <button type="button" onclick="calculateStopBang()">Calculate Score</button>
    `;
}

function generateStopBangQuestions() {
    return `
        <label>Snoring:</label>
        <input type="checkbox" id="snoring"> Do you snore loudly (louder than talking or loud enough to be heard through closed doors)?<br>
        <label>Tiredness:</label>
        <input type="checkbox" id="tiredness"> Do you often feel tired, fatigued, or sleepy during daytime?<br>
        <label>Observed Apnoea:</label>
        <input type="checkbox" id="apnoea"> Has anyone observed you stop breathing during your sleep?<br>
        <label>Blood Pressure:</label>
        <input type="checkbox" id="bp"> Do you have or are you being treated for high blood pressure?<br>
        <label>BMI > 35 kg/m²:</label>
        <input type="checkbox" id="bmi"> Is your BMI greater than 35 kg/m²?<br>
        <label>Age > 50:</label>
        <input type="checkbox" id="age"> Are you older than 50 years?<br>
        <label>Neck circumference > 40 cm:</label>
        <input type="checkbox" id="neck"> Is your neck circumference greater than 40 cm?<br>
        <label>Gender:</label>
        <input type="checkbox" id="gender"> Are you male?<br>
    `;
}

function calculateStopBang() {
    let totalScore = 0;
    const stopBangElements = ["snoring", "tiredness", "apnoea", "bp", "bmi", "age", "neck", "gender"];
    stopBangElements.forEach(id => {
        if (document.getElementById(id).checked) {
            totalScore++;
        }
    });
    showResult(`STOP-Bang Score: ${totalScore}`);
}
