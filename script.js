function loadScoreForm() {
    const scoreType = document.getElementById("scoreType").value;
    const scoreForm = document.getElementById("scoreForm");
    scoreForm.innerHTML = ""; // Clear previous form

    switch (scoreType) {
        case "epworth":
            scoreForm.innerHTML = getEpworthForm();
            break;
        case "stopbang":
            scoreForm.innerHTML = getStopBangForm();
            break;
        case "nose":
            scoreForm.innerHTML = getNoseForm();
            break;
        case "edtq7":
            scoreForm.innerHTML = getEdtq7Form();
            break;
    }
}

function showResult(resultText) {
    const resultDiv = document.getElementById("result");
    const scoreResult = document.getElementById("scoreResult");
    scoreResult.textContent = resultText;
    resultDiv.style.display = "block";
}

function copyToClipboard() {
    const scoreResult = document.getElementById("scoreResult").textContent;
    navigator.clipboard.writeText(scoreResult).then(() => {
        alert("Result copied to clipboard!");
    });
}
