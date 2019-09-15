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
    $('.outer-container').replaceWith(`<div class='outer-container'><div class="question-container container">
    <form id="js-question-form" type='submit' required>
        <fieldset>
            <p class='js-question'>${question}</p>
        
        </fieldset> 
        <button class="submit js-submit">Submit</button>
    </form>
    </div>
    <p>Question: ${STORE.currentQuestion+1}/5</p>
    <p>Score ${STORE.score}%</p>
    </div>`);
        handleOptions();
        showResult();
        updateCurrentQuestion();
        
};

function handleOptions() {
    // this function shows the options
    for (let i=0; i<STORE.questions[STORE.currentQuestion].options.length; i++){
        let option = STORE.questions[STORE.currentQuestion].options[i];
        $(`<div class='options'>
        <input type='radio' id=${option} name='option' value='${option}'>
        <label for='${option}'>${option}</label>
    </div>`).insertAfter('.js-question')};    
};

function nextQuestion() {
    $('.js-next').click(function(event) {
        event.preventDefault();
        displayQuestion();
        console.log(`nextQuestion ran!`);
    });
}
function showResult() {
    //checks answer and should return either the correct or incorrect result
    let correctAnswer = STORE.questions[STORE.currentQuestion].answer;
    console.log(correctAnswer);
    $('.js-submit').click(function(e) {
        e.preventDefault();
        let userAnswer = $('input[type="radio"]:checked').val();
        console.log(userAnswer);
        if (userAnswer == correctAnswer) {
            updateCurrentScore();
            $('.outer-container').replaceWith(`<div class="outer-container"><div class="container">
            <h2>Correct!</h2>
            <button class="next-question js-next">Next Question</button>
        </div>
        <p>Question ${STORE.currentQuestion}/5</p>
        <p>Score ${STORE.score}%</p>
    </div>`);
    nextQuestion();} 
    else {
        $('.outer-container').replaceWith(`<div class="outer-container"><div class="container">
        <h2>Sorry! That's incorrect</h2>
        <button class="js-show-correct show-correct">Show the Answer</button>
        <button class="next-question js-next">Next Question</button>
        <p class="correct-answer">Justin Vernon</p>
    </div>
    <p>Question ${STORE.currentQuestion}/5</p>
    <p>Score ${STORE.score}%</p>
</div>`)
            console.log('BOOO');
        nextQuestion();};
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
    STORE.score += 20;
}

function updateCurrentQuestion() {
    //adds to the currentQuestion key
    STORE.currentQuestion += 1;
}


$(startQuiz());