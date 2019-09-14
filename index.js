let i = 0;

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
    updateCurrentQuestion();
    
    $('.js-start-page').replaceWith(`<div class="question-container container">
    <form id="js-question-form">
        <fieldset>
        <p>${question}</p>
        <div>
            <input type='radio' id='answer1' name='question1'>
            <label for='answer1'>Justin Vernon</label>
        </div>
        <div>
            <input type='radio' id='matthealy' name='question1'>
            <label for='matthealy'>Matt Healy</label>
        </div>
        <div>
            <input type='radio' id='francis' name='question1'>
            <label for='francis'>Francis Starlite</label>
        </div>
        <div>
            <input type='radio' id='kanye' name='question1'>
            <label for='kanye'>Kanye West</label>
        </div>
        </fieldset> 
    </form>
    <button class="submit js-submit">Submit</button>
</div>
<p>Question: ${currentQuestion}</p>
<p>Score 0%</p>`);
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
    //shows the current score on each question page
}

function updateCurrentQuestion() {
    //adds to the currentQuestion key
    STORE.currentQuestion += 1;
}


$(startQuiz());