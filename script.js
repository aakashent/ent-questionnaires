/* General styling */
body {
    font-family: 'Arial', sans-serif;
    background-color: #f9f9f9;
    margin: 0;
    padding: 20px;
    display: flex;
    justify-content: center;
}

.container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    padding: 20px;
}

/* Left side: Scores and Questions */
.left-panel {
    width: 65%; /* Make the left panel wider to accommodate more space */
}

.header {
    margin-bottom: 20px;
}

.header label {
    font-weight: bold;
}

#scoreType {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    background-color: #ffffff;
    font-size: 16px;
    color: #333;
    margin-top: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-image: url('data:image/svg+xml;charset=US-ASCII,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 5"><path fill="%23333" d="M2 0L0 2h4z"/></svg>');
    background-repeat: no-repeat;
    background-position: right 10px center;
    background-size: 8px 10px;
}

.questionnaire-list {
    background-color: #00796b; /* Dark teal background */
    padding: 20px;
    border-radius: 10px;
    color: white;
}

/* Middle: Questions and Answers */
.questionnaire {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
}

.question-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.question-text {
    flex: 3; /* Ensure the question text takes up enough space */
    padding: 10px;
    background-color: #00796b;
    color: white;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-start; /* Align text to the left */
}

.answer-input {
    flex: 2; /* Ensure the answer input takes up enough space */
    display: flex;
    align-items: center;
}

.answer-input select,
.answer-input input[type="checkbox"],
.answer-input input[type="range"] {
    width: 100%;
    padding: 5px;
    margin-left: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    background-color: white;
}

/* Right side: Results */
.results-panel {
    width: 30%;
    padding: 20px;
    background-color: #f8f9fa;
    border-radius: 10px;
    border: 1px solid #dee2e6;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
    display: none; /* Hide initially */
}

#scoreResult {
    font-size: 24px;
    color: #333;
    margin-bottom: 15px;
    font-weight: bold;
}

#interpretation {
    font-size: 18px;
    color: #007bff;
    margin-bottom: 20px;
}

#copyButtons {
    display: flex;
    justify-content: space-around;
}

#copyButtons button {
    background-color: #007bff;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    width: 45%;
}

#copyButtons button:hover {
    background-color: #0056b3;
}
