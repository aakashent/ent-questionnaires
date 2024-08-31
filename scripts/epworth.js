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
        <input type="range" min="0" max="3" step="1" value="0" id="reading">
        <p>Value: <span id="readingValue">0</span></p>

        <label>Watching TV:</label>
        <input type="range" min="0" max="3" step="1" value="0" id="watchingTV">
        <p>Value: <span id="watchingTVValue">0</span></p>

        <label>Sitting inactive in a public place (e.g., a theatre or a meeting):</label>
        <input type="range" min="0" max="3" step="1" value="0" id="publicPlace">
        <p>Value: <span id="publicPlaceValue">0</span></p>

        <label>As a passenger in a car for an hour without a break:</label>
        <input type="range" min="0" max="3" step="1" value="0" id="passenger">
        <p>Value: <span id="passengerValue">0</span></p>

        <label>Lying down to rest in the afternoon when circumstances permit:</label>
        <input type="range" min="0" max="3" step="1" value="0" id="lyingDown">
        <p>Value: <span id="lyingDownValue">0</span></p>

        <label>Sitting and talking to someone:</label>
        <input type="range" min="0" max="3" step="1" value="0" id="talking">
        <p>Value: <span id="talkingValue">0</span></p>

        <label>Sitting quietly after a lunch without alcohol:</label>
        <input type="range" min="0" max="3" step="1" value="0" id="afterLunch">
        <p>Value: <span id="afterLunchValue">0</span></p>

        <label>In a car, while stopped for a few minutes in traffic:</label>
        <input type="range" min="0" max="3" step="1" value="0" id="inTraffic">
        <p>Value: <span id="inTrafficValue">0</span></p>

        <script>
        document.querySelectorAll('input[type="range"]').forEach(slider => {
            slider.addEventListener('input', (e) => {
                const valueDisplay = document.getElementById(e.target.id + 'Value');
                valueDisplay.textContent = e.target.value;
            });
        });
        </script>
    `;
}

function calculateEpworth() {
    let totalScore = 0;
    const formElements = ['reading', 'watchingTV', 'publicPlace', 'passenger', 'lyingDown', 'talking', 'afterLunch', 'inTraffic'];
    let detailedText = "";

    formElements.forEach(id => {
        const value = parseInt(document.getElementById(id).value);
        totalScore += value;
        detailedText += `<strong>${id.replace(/([A-Z])/g, ' $1')}:</strong> ${value}<br>`;
    });

    showResult(`Epworth Sleepiness Scale: ${totalScore}`, detailedText);
}
