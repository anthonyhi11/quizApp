function startQuiz() {
    //this function should start the quiz
    $('.js-start-button').click(function(e) {
        e.preventDefault();
        displayQuestion();
    });
    console.log(`startQuiz successfully ran`);
}

function displayQuestion() {
    //this function should display a new question and options
    let question = STORE.questions[STORE.currentQuestion].question;
    $('.js-start-page').replaceWith(`<div class="question-container container">
    <form id="js-question-form">
        <fieldset>
        <p class='js-question'>${question}</p>
        <p>Question: ${STORE.currentQuestion+1}</p>
        <p>Score ${STORE.score}/5</p>`);
        handleOptions();
        updateCurrentQuestion();
};

function handleOptions() {
    
    for (let i=0; i<STORE.questions[STORE.currentQuestion].options.length; i++){
        let option = STORE.questions[STORE.currentQuestion].options[i];
        $('.js-question').append(`<div>
        <input type='radio' id='${option}' name='question'>
        <label for='answer1'>${option}</label>
    </div>`)};    
};


function checkAnswer() {
    //this function should check the user input and return either true or false
}


function showResult() {
    //depending on result of checkAnswer() return either the correct or incorrect result
}


function displayCorrectAnswer() {
    //when user clicks show answer button, show the correct answer
}


function showFinalScore() {
    //shows final score at the end of the question
}

function updateCurrentScore() {
    //adds to the score. run this function IF they get it right
    STORE.score += 1;
}

function updateCurrentQuestion() {
    //adds to the currentQuestion key
    STORE.currentQuestion += 1;
}


$(startQuiz());