function startQuiz() {
    //this function should start the quiz
    $('.js-start-button').click(function(e) {
        e.preventDefault();
        displayQuestion();
    });
    console.log(`startQuiz successfully ran`);
}

function displayQuestion() {
    //this function should display a new question
    let question = STORE.questions[STORE.currentQuestion].question;
    $('.js-start-page').replaceWith(`<div class="question-container container">
    <form id="js-question-form" type='submit' required>
        <fieldset>
            <p class='js-question'>${question}</p>
        
        </fieldset> 
        <button class="submit js-submit">Submit</button>
    </form>
    <p>Question: ${STORE.currentQuestion+1}</p>
    <p>Score ${STORE.score}/5</p>`);
        handleOptions();
        showResult();
        updateCurrentQuestion();
        
};

function handleOptions() {
    // this function shows the options
    for (let i=0; i<STORE.questions[STORE.currentQuestion].options.length; i++){
        let option = STORE.questions[STORE.currentQuestion].options[i];
        $('.js-question').append(`<div>
        <input type='radio' id='${option}' name='option'>
        <label for='${option}'>${option}</label>
    </div>`)};    
};

function showResult() {
    //checks answer and should return either the correct or incorrect result
    let correctAnswer = STORE.questions[STORE.currentQuestion].answer;
    console.log(correctAnswer);
    $('.js-submit').click(function(e) {
        e.preventDefault();
        let userAnswer = $('input[type="radio"]:checked').val();
        console.log(userAnswer);
        if (userAnswer == correctAnswer) {
            console.log('Congrats!')
        } else {
            console.log('BOOO');
        };
    });
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