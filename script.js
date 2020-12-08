const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
//quiz questions
const myQuestions = [
    {
        question: "Commonly used data types DO NOT include:",
        answers: {
            a: "strings",
            b: "booleans",
            c: "alerts",
            d: "numbers"
        },
        correctAnswer: "c"
    },
    {
        question: "CSS is to Bootstrap as Javascript is to ___?",
        answers: {
            a: "modal",
            b: "jQuery",
            c: "HTML",
            d: "window"
        },
        correctAnswer: "b"
    },
    {
        question: "Which term is NOT used to style code in CSS?",
        answers: {
            a: "background-color",
            b: "margin",
            c: "text-color",
            d: "var"
        },
        correctAnswer: "d"
    },
    {
        question: "What allows you to iterate through items in an array?",
        answers: {
            a: "functions",
            b: "loops",
            c: "vars",
            d: "console"
        },
        correctAnswer: "b"
    },
    {
        question: "Which program is used when coding more interactivity on a webpage?",
        answers: {
            a: "HTML",
            b: "CSS",
            c: "JavaScript",
            D: "C#"
        },
        correctAnswer: "c"
    },
    {
        question: "Which is not used in a string?",
        answers: {
            a: "text",
            b: "integer"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the term for a notation resembling code, but is used for prepping code in note form?",
        answers: {
            a: "false code",
            b: "alkaline notation",
            c: "pseudocode",
            d: "source code"
        },
        correctAnswer: "c"
    },
    {
        question: "What tab comes up when you choose to inspect the browser window?",
        answers: {
            a: "console",
            b: "element",
            c: "variables",
            d: "search bar"
        },
        correctAnswer: "b"
    },
    {
        question: "Where can you view errors in your code?",
        answers: {
            a: "console",
            b: "jQuery",
            c: "pseudocode",
            d: "gitlab"
        },
        correctAnswer: "a"
    },
    {
        question: "Which symbol is used to link jQuery to a special element?",
        answers: {
            a: "!",
            b: "*",
            c: "%",
            d: "$"
        },
        correctAnswer: "d"
    }
];
function buildQuiz(){
    //variable to store the HTML output
    const output = [];

    //for each question...
    myQuestions.forEach(
        (currentQuestion, questionNumber) => {
            //variable to store the list of possible answers
            const answers = [];

            for(letter in currentQuestion.answers){

                //add HTML radio button
                answers.push(
                    `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                    </label>` 
                );
            }
            output.push(
                `<div class="slide">
                <div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join('')} </div>
                </div>`
            );
        }
    );
    //combining output list into one string of HTML
    quizContainer.innerHTML = output.join('');
}

function showResults(){
    //answer containers from quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    //keep track of user's answers
    let numCorrect = 0;

    //for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {
        //find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        //if correct
        if (userAnswer === currentQuestion.correctAnswer){
            //add to number correct
            numCorrect++

            //color the answers green
            answerContainers[questionNumber].style.color = 'lightgreen';
        }
        //if answer wrong or blank
        else {
            //color answer red
            answerContainers[questionNumber].style.color = 'red';
            
        }
    });

    //show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of 10 correct`
}

//on submit, show results
submitButton.addEventListener('click', showResults);

//timer
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function (){
      minutes = parseInt(timer / 60, 10)
      seconds = parseInt(timer % 60, 10);
  
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
  
      display.textContent = minutes + ":" + seconds;
      
      if (--timer < 0) {
          timer = 600;
            //timer = duration; // uncomment this line to reset timer automatically after reaching 0
          }
        }, 1000);
    }

    window.onload = function () {
      var time = 600; //your time in seconds here
      display = document.querySelector('#myTimerDisplay');
      startTimer(time, display);
    };

function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide ===0){
        previousButton.style.display = 'none';
    }
    else{
        previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1){
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
    }
}

//display quiz immediately
buildQuiz();

//pagination
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;
//show first slide
showSlide(currentSlide);

function showNextSlide() {
    showSlide(currentSlide + 1);
}
function showPreviousSlide() {
    showSlide(currentSlide - 1);
}
//event listeners
previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);
//new event listeners here









