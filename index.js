function renderPage() {

}
const i=0;
const j=0;
const k=1;
const l=2;
const m=3;

function increaseI() { 
    i++;
}

function handleStartQuiz() {
    $('.js-start-button').click(function(event) {
        event.preventDefault();
        $('.js-start-page').replaceWith(`
        <div class="question-container container">
        <form id="js-question-form">
            <fieldset>
            <p>${STORE[i].question}</p>
            <div>
                <input type='radio' id='option1' name='question1'>
                <label for='option1'>${STORE[i].options[j]}</label>
            </div>
            <div>
                <input type='radio' id='option2' name='question1'>
                <label for='option2'>${STORE[i].options[k]}</label>
            </div>
            <div>
                <input type='radio' id='option3' name='question1'>
                <label for='option3'>${STORE[i].options[l]}</label>
            </div>
            <div>
                <input type='radio' id='option4' name='question1'>
                <label for='option4'>${STORE[i].options[m]}</label>
            </div>
            </fieldset> 
        </form>
        <button class="submit js-submit">Submit</button>
        `);}
    )};

function handleSubmitQuestion() {

}

function handleShowCorrect() {
    let correctAnswer= STORE[i].answer;
    $('.outer-container').on('click', '.js-submit', function(event) {
        event.preventDefault();
        let choice = $('input[type=radio][name=question1]:checked').val();
        if (choice === correctAnswer) {
            $('.question-container').replaceWith(`<div class="container">
            <h2>Correct!</h2>
            <button class="next-question js-next">Next Question</button>
        </div>
        <p>Question 1/5</p>
        <p>Score 10%</p>`)
        } else {
            $('.question-container').replaceWith(`<div class="container">
            <h2>Sorry! That's incorrect</h2>
            <button class="js-show-correct show-correct">Show the Answer</button>
            <button class="next-question js-next">Next Question</button>
            <p class="correct-answer">Justin Vernon</p>
        </div>
        <p>Question 1/5</p>
        <p>Score 0%</p>`)
        };
    });
};

function handleNextQuestion() {
    handleStartQuiz();
}

function handleRetakeQuiz() {

}

function doAllFunctions() {
    handleStartQuiz();
    increaseI();
    handleStartQuiz();
    handleShowCorrect();

}

$(doAllFunctions());
