function startQuiz() {
    //this function should start the quiz
    $('.js-start-button').click(function(e) {
        e.preventDefault();
        displayQuestion();
    });
}

function displayQuestion() {
    //this function should display a new question
    let question = STORE.questions[STORE.currentQuestion].question;
    $('.outer-container').replaceWith(`<div class='outer-container'><div class="question-container container">
    <form class="js-question-form">
        <fieldset>
            <p class='js-question'>${question}</p>
        
        </fieldset> 
        <button type='submit' class="submit js-submit">Submit</button>
    </form>
    </div>
    <p class='bottom-question'>Question: ${STORE.currentQuestion+1}/5</p>
    <p class='bottom-score'>Score ${STORE.score}%</p>
    </div>`);
        handleOptions();
        showResult();
        updateCurrentQuestion();
};

/*function handleOptions() {
    // this function shows the options
    for (let i=0; i<STORE.questions[STORE.currentQuestion].options.length; i++){
        let option = STORE.questions[STORE.currentQuestion].options[i];
        $(`<div class='options'>
        <input type='radio' id=${option} name='option' value='${option}' class='radio-options' required>
        <label for='${option}' class='options'>${option}</label>
    </div>`).insertAfter('.js-question')};    
};*/

function handleOptions () {
    let options = STORE.questions[STORE.currentQuestion].options;
    let optionArr = options.map(option =>`<div class='options'>
    <input type='radio' id=${option} name='option' value='${option}' class='radio-options' required>
    <label for='${option}' class='options'>${option}</label>
</div>`);
    let list = optionArr.join('');
    $(list).insertAfter('.js-question');
}


function nextQuestion() {
    if (STORE.currentQuestion <= 4) {
        $('.js-next').click(function(event) {
            event.preventDefault();
            displayQuestion();
        });
    } else {
        showFinalScore();
    };
}
function showResult() {
    //checks answer and should return either the correct or incorrect result
    let correctAnswer = STORE.questions[STORE.currentQuestion].answer;
    $('.js-question-form').submit(function(e) {
        e.preventDefault();
        let userAnswer = $('input[type="radio"]:checked').val();
        if (userAnswer === correctAnswer) {
            updateCurrentScore();
            $('.outer-container').replaceWith(`<div class="outer-container"><div class="container">
            <h2>Correct!</h2>
            <button class="next-question js-next">Next Question</button>
        </div>
        <p class='bottom-question'>Question ${STORE.currentQuestion}/5</p>
        <p class='bottom-score'>Score ${STORE.score}%</p>
    </div>`);
    nextQuestion();} 
    else {
        $('.outer-container').replaceWith(`<div class="outer-container"><div class="container">
        <h2>Sorry! That's incorrect</h2>
        <button class="js-show-correct show-correct">Show the Answer</button>
        <button class="next-question js-next">Next Question</button>
        <p class="correct-answer hidden">${correctAnswer}</p>
    </div>
    <p class='bottom-question'>Question ${STORE.currentQuestion}/5</p>
    <p class='bottom-score'>Score ${STORE.score}%</p>
</div>`)
        displayCorrectAnswer();
        nextQuestion();};
    }); displayCorrectAnswer();
}


function displayCorrectAnswer() {
    //when user clicks show answer button, show the correct answer
    $('.js-show-correct').click(function(event) {
        event.preventDefault();
        $('p.correct-answer').toggleClass('hidden'); 
    });   
}


function showFinalScore() {
    //shows final score at the end of the question
    $('.js-next').click(function(event) {
        event.preventDefault();
        if (STORE.score >= 80) {
        $('.outer-container').replaceWith(`
        <div class="outer-container">
            <div class="container">
                <h2>Congrats! You're insufferable!</h2>
                <h3>Final Score: ${STORE.score}%</h3>
                <button class="js-restart restart">Restart Quiz</button>
            </div>
            <p class="credits">Quiz by Anthony. I do not own images.</p>
        </div>`);}
        else {
            $('.outer-container').replaceWith(`
        <div class="outer-container">
            <div class="container">
                <h2>Ouch! Try growing a beard!</h2>
                <h3>Final Score: ${STORE.score}%</h3>
                <button class="js-restart restart">Restart Quiz</button>
            </div>
            <p class="credits">Quiz by Anthony. I do not own images.</p>
        </div>`);
        } 
        restartQuiz();
});
}

function restartQuiz() {
    $('.js-restart').click(function(event) {
        event.preventDefault();
        STORE.score = 0;
        STORE.currentQuestion = 0;
        displayQuestion();
    });
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