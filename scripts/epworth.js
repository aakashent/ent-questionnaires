function getEpworthForm() {
    return `
        <div class="question-row">
            <label>Sitting and reading:</label>
            <select id="reading" onchange="calculateEpworth()">
                <option value="0">Would never doze</option>
                <option value="1">Slight chance of dozing</option>
                <option value="2">Moderate chance of dozing</option>
                <option value="3">High chance of dozing</option>
            </select>
        </div>
        <div class="question-row">
            <label>Watching TV:</label>
            <select id="watchingTV" onchange="calculateEpworth()">
                <option value="0">Would never doze</option>
                <option value="1">Slight chance of dozing</option>
                <option value="2">Moderate chance of dozing</option>
                <option value="3">High chance of dozing</option>
            </select>
        </div>
        <div class="question-row">
            <label>Sitting inactive in a public place (e.g., a theatre or a meeting):</label>
            <select id="publicPlace" onchange="calculateEpworth()">
                <option value="0">Would never doze</option>
                <option value="1">Slight chance of dozing</option>
                <option value="2">Moderate chance of dozing</option>
                <option value="3">High chance of dozing</option>
            </select>
        </div>
        <div class="question-row">
            <label>As a passenger in a car for an hour without a break:</label>
            <select id="passenger" onchange="calculateEpworth()">
                <option value="0">Would never doze</option>
                <option value="1">Slight chance of dozing</option>
                <option value="2">Moderate chance of dozing</option>
                <option value="3">High chance of dozing</option>
            </select>
        </div>
        <div class="question-row">
            <label>Lying down to rest in the afternoon when circumstances permit:</label>
            <select id="lyingDown" onchange="calculateEpworth()">
                <option value="0">Would never doze</option>
                <option value="1">Slight chance of dozing</option>
                <option value="2">Moderate chance of dozing</option>
                <option value="3">High chance of dozing</option>
            </select>
        </div>
        <div class="question-row">
            <label>Sitting and talking to someone:</label>
            <select id="talking" onchange="calculateEpworth()">
                <option value="0">Would never doze</option>
                <option value="1">Slight chance of dozing</option>
                <option value="2">Moderate chance of dozing</option>
                <option value="3">High chance of dozing</option>
            </select>
        </div>
        <div class="question-row">
            <label>Sitting quietly after a lunch without alcohol:</label>
            <select id="afterLunch" onchange="calculateEpworth()">
                <option value="0">Would never doze</option>
                <option value="1">Slight chance of dozing</option>
                <option value="2">Moderate chance of dozing</option>
                <option value="3">High chance of dozing</option>
            </select>
        </div>
        <div class="question-row">
            <label>In a car, while stopped for a few minutes in traffic:</label>
            <select id="inTraffic" onchange="calculateEpworth()">
                <option value="0">Would never doze</option>
                <option value="1">Slight chance of dozing</option>
                <option value="2">Moderate chance of dozing</option>
                <option value="3">High chance of dozing</option>
            </select>
        </div>
    `;
}

function calculateEpworth() {
    let totalScore = 0;
    const formElements = ['reading', 'watchingTV', 'publicPlace', 'passenger', 'lyingDown', 'talking', 'afterLunch', 'inTraffic'];
    let detailedText = "";

    formElements.forEach(id => {
        const value = parseInt(document.getElementById(id).value);
        totalScore += value;
        detailedText += `${id.replace(/([A-Z])/g, ' $1')}: ${value}\n`;
    });

    let interpretationText = '';
    if (totalScore <= 10) {
        interpretationText = "Normal sleepiness.";
    } else if (totalScore <= 12) {
        interpretationText = "Mild sleepiness.";
    } else if (totalScore <= 15) {
        interpretationText = "Moderate sleepiness.";
    } else {
        interpretationText = "Severe sleepiness.";
    }

    showResult(`Epworth Sleepiness Scale: ${totalScore}`, interpretationText, detailedText);
}
