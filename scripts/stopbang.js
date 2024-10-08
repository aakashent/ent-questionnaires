// stopbang.js

function getStopBangForm() {
    return `
        <h3>STOP-Bang Questionnaire</h3>
        <div class="questionnaire">
            ${generateStopBangQuestions()}
        </div>
    `;
}

function generateStopBangQuestions() {
    const questions = [
        { id: 'snoring', text: 'Do you snore loudly (louder than talking or loud enough to be heard through closed doors)?' },
        { id: 'tiredness', text: 'Do you often feel tired, fatigued, or sleepy during the daytime?' },
        { id: 'apnoea', text: 'Has anyone observed you stop breathing during your sleep?' },
        { id: 'bp', text: 'Do you have or are you being treated for high blood pressure?' },
        { id: 'bmi', text: 'Is your BMI greater than 35 kg/m²?' },
        { id: 'age', text: 'Are you older than 50 years?' },
        { id: 'neck', text: 'Is your neck circumference greater than 40 cm?' },
        { id: 'gender', text: 'Are you male?' },
    ];

    let html = '';
    questions.forEach(q => {
        html += `
            <div class="question-row">
                <div class="question-text">
                    ${q.text}
                </div>
                <div class="answer-input">
                    <button id="${q.id}Yes" onclick="selectYesNo('${q.id}', true)">Yes</button>
                    <button id="${q.id}No" onclick="selectYesNo('${q.id}', false)">No</button>
                </div>
            </div>
        `;
    });
    return html;
}

function selectYesNo(id, isYes) {
    const yesButton = document.getElementById(id + 'Yes');
    const noButton = document.getElementById(id + 'No');
    
    if (yesButton && noButton) {
        yesButton.classList.remove('selected');
        noButton.classList.remove('selected');
        if (isYes) {
            yesButton.classList.add('selected');
        } else {
            noButton.classList.add('selected');
        }
    }

    calculateStopBang();
}

function calculateStopBang() {
    const formElements = ['snoring', 'tiredness', 'apnoea', 'bp', 'bmi', 'age', 'neck', 'gender'];
    let totalScore = 0;
    let detailedText = "";

    formElements.forEach(id => {
        const yesButton = document.getElementById(id + 'Yes');
        const noButton = document.getElementById(id + 'No');

        if (yesButton && yesButton.classList.contains('selected')) {
            totalScore += 1;
            const questionText = yesButton.closest('.question-row').querySelector('.question-text').textContent.trim();
            detailedText += `${questionText} Yes\n`;
        } else if (noButton) {
            const questionText = noButton.closest('.question-row').querySelector('.question-text').textContent.trim();
            detailedText += `${questionText} No\n`;
        }
    });

    let interpretationText = '';
    if (totalScore <= 2) {
        interpretationText = "Low risk of Obstructive Sleep Apnea (OSA).";
    } else if (totalScore <= 4) {
        interpretationText = "Intermediate risk of Obstructive Sleep Apnea (OSA).";
    } else {
        interpretationText = "High risk of Obstructive Sleep Apnea (OSA).";
    }

    showResult(`STOP-Bang Score: ${totalScore}`, interpretationText, detailedText);
}
