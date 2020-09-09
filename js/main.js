



const quizData = [ 
    {
        question : 'Axl Rose frequentava a igreja e ensinava catecismo?',
        a: 'November rain, que não',
        b: 'sim, e ainda cantava no coral',
        c : 'Axl Rose nunca pisou numa igreja',
        correct: 'b'
    
    },
    {
        question : 'A música Time, Pink Floyd, foi gravada em que ano?',
        a: '1977',
        b: '1973',
        c : '1981',
        correct: 'b'

    },
    {
        question : 'Alanis Morissete nasceu em qual país?',
        a: 'Canadá',
        b: 'Inglaterra',
        c : 'EUA',
        correct: 'a'
    },
    {
        question : 'Nos anos 90, qual banda de rock cantava a música Epic?',
        a: 'Guns & Roses',
        b: 'Skid Row',
        c : 'Faith no More',
        correct: 'c'
    },
    {
        question : 'Qual a música mais tocada da banda Queen, no spotify?',
        a: 'Bohemian Rhapsody',
        b: 'We Are the Champions',
        c : 'I Want to Break Free',
        correct: 'a'
    },
    {
        question : 'Em que ano aconteceu a primeira edição do Rock in Rio?',
        a: '1980',
        b: '1981',
        c : '1985',
        correct: 'c'
    }
    
]
const quiz = document.getElementById('quiz'); // onde está esse id?
const answerEls = document.querySelectorAll('.answer');

const questionEl = document.getElementById('question');
const a_text= document.getElementById('a-text');
const b_text= document.getElementById('b-text');
const c_text= document.getElementById('c-text');
const submitBtn = document.getElementById('submit')

let currentQuiz = 0;

let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswer();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText= currentQuizData.question;
    a_text.innerText=currentQuizData.a;
    b_text.innerText=currentQuizData.b;
    c_text.innerText=currentQuizData.c;

   
}
function getSelected(){
   
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer= answerEl.id;

        }
    });

    return answer;

}
function deselectAnswer(){
    answerEls.forEach((answeEl)=>{
        answeEl.checked = false;
    })
}
submitBtn.addEventListener("click", () => {
    const answer = getSelected();
    
   if(answer){
    if(answer === quizData[currentQuiz].correct){
        score++;

        }

    
    currentQuiz++;
   

    if(currentQuiz < quizData.length){
            loadQuiz();

        }else{
            quiz.innerHTML = `<h2> Você acertou ${score}/${quizData.length} respostas.<h2> 
            <button onclick='location.reload()'>Reiniciar</button>`
        }
    
    }   

})