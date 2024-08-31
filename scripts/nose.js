// nose.js

function getNoseForm() {
    return `
        <h3>Nasal Obstruction Symptom Evaluation (NOSE)</h3>
        <div class="questionnaire">
            ${generateNoseQuestions()}
        </div>
    `;
}

function generateNoseQuestions() {
    const questions = [
        { id: 'nasalCongestion', text: 'Nasal congestion or stuffiness:', range: "0 (None) - 4 (Severe)" },
        { id: 'nasalObstruction', text: 'Nasal blockage or obstruction:', range: "0 (None) - 4 (Severe)" },
        { id: 'troubleBreathing', text: 'Trouble breathing through your nose:', range: "0 (None) - 4 (Severe)" },
        { id: 'troubleSleeping', text: 'Trouble sleeping:', range: "0 (None) - 4 (Severe)" },
        { id: 'unableToGetAir', text: 'Unable to get enough air through your nose during exercise or exertion:', range: "0 (None) - 4 (Severe)" },
    ];

    let html = '';
    questions.forEach(q => {
        html += `
            <div class="slider-question-row">
                <div class="question-text">
                    ${q.text}
                </div>
                <div class="scale-text">
                    ${q.range}
                </div>
                <div class="answer-input">
                    <input type="range" id="${q.id}" min="0" max="4" step="1" value="0" oninput="updateNoseValue('${q.id}'); calculateNose();">
                    <span id="${q.id}Value">0</span>
                </div>
            </div>
        `;
    });
    return html;
}

function updateNoseValue(id) {
    document.getElementById(`${id}Value`).textContent = document.getElementById(id).value;
}

function calculateNose() {
    const formElements = ['nasalCongestion', 'nasalObstruction', 'troubleBreathing', 'troubleSleeping', 'unableToGetAir'];
    let totalScore = 0;
    let detailedText = "";

    formElements.forEach(id => {
        const slider = document.getElementById(id);
        const value = parseInt(slider.value);
        totalScore += value;
        detailedText += `${slider.previousElementSibling.textContent.trim()} ${value}\n`;
    });

    let interpretationText = '';
    const percentageScore = (totalScore / 20) * 100;
    if (percentageScore <= 25) {
        interpretationText = "Mild nasal obstruction.";
    } else if (percentageScore <= 50) {
        interpretationText = "Moderate nasal obstruction.";
    } else if (percentageScore <= 75) {
        interpretationText = "Severe nasal obstruction.";
    } else {
        interpretationText = "Extreme nasal obstruction.";
    }

    showResult(`NOSE Score: ${percentageScore}%`, interpretationText, detailedText);
}
