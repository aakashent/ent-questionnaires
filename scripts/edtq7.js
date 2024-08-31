// edtq7.js

function getEdtq7Form() {
    return `
        <h3>Eustachian Tube Dysfunction Questionnaire-7 (ETDQ-7)</h3>
        <div class="questionnaire">
            ${generateEdtq7Questions()}
        </div>
    `;
}

function generateEdtq7Questions() {
    const questions = [
        { id: 'fullness', text: 'A feeling that your ear is clogged or "under water":' },
        { id: 'discomfort', text: 'Ear pain or discomfort:' },
        { id: 'popping', text: 'A feeling of popping or clicking in the ear:' },
        { id: 'pressure', text: 'A feeling of pressure in the ear:' },
        { id: 'muffled', text: 'Muffled hearing:' },
        { id: 'sounds', text: 'Ringing, buzzing, or other sounds in the ear:' },
        { id: 'balance', text: 'A feeling of dizziness or imbalance:' },
    ];

    let html = '';
    questions.forEach(q => {
        html += `
            <div class="question-row">
                <div class="question-text">
                    ${q.text}
                </div>
                <div class="answer-input">
                    <input type="range" id="${q.id}" min="0" max="7" step="1" value="0" oninput="updateEdtq7Value('${q.id}'); calculateEdtq7();">
                    <span id="${q.id}Value">0</span>
                </div>
            </div>
        `;
    });
    return html;
}

function updateEdtq7Value(id) {
    document.getElementById(`${id}Value`).textContent = document.getElementById(id).value;
}

function calculateEdtq7() {
    const formElements = ['fullness', 'discomfort', 'popping', 'pressure', 'muffled', 'sounds', 'balance'];
    let totalScore = 0;
    let detailedText = "";

    formElements.forEach(id => {
        const slider = document.getElementById(id);
        const value = parseInt(slider.value);
        totalScore += value;
        detailedText += `${slider.previousElementSibling.textContent.trim()} ${value}\n`;
    });

    const averageScore = totalScore / formElements.length;
    let interpretationText = '';
    if (averageScore <= 2) {
        interpretationText = "Mild Eustachian Tube Dysfunction.";
    } else if (averageScore <= 3) {
        interpretationText = "Moderate Eustachian Tube Dysfunction.";
    } else {
        interpretationText = "Severe Eustachian Tube Dysfunction.";
    }

    showResult(`ETDQ-7 Score: ${averageScore.toFixed(2)}`, interpretationText, detailedText);
}
