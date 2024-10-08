// nose.js

function getNoseForm() {
    return `
        <h3>Nasal Obstruction Symptom Evaluation (NOSE)</h3>
        <div class="questionnaire">
            <div class="slider-scale-wrapper">
                <span class="scale-text-left">0 (None)</span>
                <span class="scale-text-right">4 (Severe)</span>
            </div>
            ${generateNoseQuestions()}
        </div>
    `;
}

function generateNoseQuestions() {
    const questions = [
        { id: 'nasalCongestion', text: 'Nasal congestion or stuffiness:' },
        { id: 'nasalObstruction', text: 'Nasal blockage or obstruction:' },
        { id: 'troubleBreathing', text: 'Trouble breathing through your nose:' },
        { id: 'troubleSleeping', text: 'Trouble sleeping:' },
        { id: 'unableToGetAir', text: 'Unable to get enough air through your nose during exercise or exertion:' },
    ];

    let html = '';
    questions.forEach(q => {
        html += `
            <div class="slider-question-row">
                <div class="question-text">
                    ${q.text}
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
    const valueElement = document.getElementById(id + 'Value');
    if (valueElement) {
        valueElement.textContent = document.getElementById(id).value;
    }
}

function calculateNose() {
    const formElements = ['nasalCongestion', 'nasalObstruction', 'troubleBreathing', 'troubleSleeping', 'unableToGetAir'];
    let totalScore = 0;
    let detailedText = "";

    formElements.forEach(id => {
        const slider = document.getElementById(id);
        if (slider) {
            const value = parseInt(slider.value);
            totalScore += value;
            const questionText = slider.closest('.slider-question-row').querySelector('.question-text').textContent.trim();
            detailedText += `${questionText} ${value}\n`;
        }
    });

    const percentageScore = (totalScore / 20) * 100;
    let interpretationText = '';
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