function getEpworthForm() {
    return `
        <h3>Epworth Sleepiness Scale</h3>
        <p>How likely are you to doze off or fall asleep in the following situations?</p>
        <form id="epworthForm">
            ${generateEpworthQuestions()}
            <button type="button" onclick="calculateEpworth()">Calculate Score</button>
        </form>
    `;
}

function generateEpworthQuestions() {
    return `
        <label>Sitting and reading:</label>
        <select>
            <option value="0">Would never doze</option>
            <option value="1">Slight chance of dozing</option>
            <option value="2">Moderate chance of dozing</option>
            <option value="3">High chance of dozing</option>
        </select>
        <label>Watching TV:</label>
        <select>
            <option value="0">Would never doze</option>
            <option value="1">Slight chance of dozing</option>
            <option value="2">Moderate chance of dozing</option>
            <option value="3">High chance of dozing</option>
        </select>
        <label>Sitting inactive in a public place (e.g., a theatre or a meeting):</label>
        <select>
            <option value="0">Would never doze</option>
            <option value="1">Slight chance of dozing</option>
            <option value="2">Moderate chance of dozing</option>
            <option value="3">High chance of dozing</option>
        </select>
        <label>As a passenger in a car for an hour without a break:</label>
        <select>
            <option value="0">Would never doze</option>
            <option value="1">Slight chance of dozing</option>
            <option value="2">Moderate chance of dozing</option>
            <option value="3">High chance of dozing</option>
        </select>
        <label>Lying down to rest in the afternoon when circumstances permit:</label>
        <select>
            <option value="0">Would never doze</option>
            <option value="1">Slight chance of dozing</option>
            <option value="2">Moderate chance of dozing</option>
            <option value="3">High chance of dozing</option>
        </select>
        <label>Sitting and talking to someone:</label>
        <select>
            <option value="0">Would never doze</option>
            <option value="1">Slight chance of dozing</option>
            <option value="2">Moderate chance of dozing</option>
            <option value="3">High chance of dozing</option>
        </select>
        <label>Sitting quietly after a lunch without alcohol:</label>
        <select>
            <option value="0">Would never doze</option>
            <option value="1">Slight chance of dozing</option>
            <option value="2">Moderate chance of dozing</option>
            <option value="3">High chance of dozing</option>
        </select>
        <label>In a car, while stopped for a few minutes in traffic:</label>
        <select>
            <option value="0">Would never doze</option>
            <option value="1">Slight chance of dozing</option>
            <option value="2">Moderate chance of dozing</option>
            <option value="3">High chance of dozing</option>
        </select>
    `;
}

function calculateEpworth() {
    let totalScore = 0;
    const formElements = document.getElementById("epworthForm").elements;
    for (let i = 0; i < formElements.length; i++) {
        if (formElements[i].type === "select-one") {
            totalScore += parseInt(formElements[i].value);
        }
    }
    showResult(`Epworth Sleepiness Scale: ${totalScore}`);
}
