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
        { id: 'fullness', text: 'A feeling that your ear is clogged or "under water":', range: "1 (No problem) - 7 (Severe problem)" },
        { id: 'discomfort', text: 'Ear pain or discomfort:', range: "1 (No problem) - 7 (Severe problem)" },
        { id: 'popping', text: 'A feeling of popping or clicking in the ear:', range: "1 (No problem) - 7 (Severe problem)" },
        { id: 'pressure', text: 'A feeling of pressure in the ear:', range: "1 (No problem) - 7 (Severe problem)" },
        { id: 'muffled', text: 'Muffled hearing:', range: "1 (No problem) - 7 (Severe problem)" },
        { id: 'sounds', text: 'Ringing, buzzing, or other sounds in the ear:', range: "1 (No problem) - 7 (Severe problem)" },
        { id: 'balance', text: 'A feeling of dizziness or imbalance:', range: "1 (No problem) - 7 (Severe problem)" },
    ];

    let html = '';
    questions.forEach(q => {
        html += `
            <div class="question-row">
                <div class="question-text">
                    ${q.text}
                    <br><small>${q.range}</small>
                </div>
                <div class="answer-input">
                    <input type="range" id="${q.id}" min="1" max="7" step="1" value="1" oninput="updateEdtq7Value('${q.id}'); calculateEdtq7();">
                    <span id="${q.id}Value">1</span>
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
