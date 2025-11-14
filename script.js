let show1 = document.querySelector ('.show1');
let show2 = document.querySelector ('.show2');
let show3 = document.querySelector ('.show3');
let show4 = document.querySelector ('.show4');
let show5 = document.querySelector ('.show5');
let show6 = document.querySelector ('.show6');
let show7 = document.querySelector ('.show7');
let show8 = document.querySelector ('.show8');
let show9 = document.querySelector ('.show9');
let show10 = document.querySelector ('.show10');
let questions = document.querySelectorAll ('.question');
let timers = document.querySelectorAll ('.timer');
let answers = document.querySelectorAll('.answers');
let radio1 = document.querySelectorAll('.radio1');
let radio2 = document.querySelectorAll('.radio2');
let radio3 = document.querySelectorAll('.radio3');
let radio4 = document.querySelectorAll('.radio4');
let radio5 = document.querySelectorAll('.radio5');
let radio6 = document.querySelectorAll('.radio6');
let radio7 = document.querySelectorAll('.radio7');
let radio8 = document.querySelectorAll('.radio8');
let radio9 = document.querySelectorAll('.radio9');
let radio10 = document.querySelectorAll('.radio10');
let radios = [radio1, radio2, radio3, radio4, radio5, radio6, radio7, radio8, radio9, radio10];

let result = document.querySelector('.result');
let check = document.querySelector('.check');
let restart = document.querySelector('.restart');
let usersAnswers = [];

function showQuestion(n){
    questions[n].textContent = '  '+questionTexts[n];
    answers[n].style.display="flex";
};
function setTimer(n){
    let i = 60;
    let timerId = setInterval(function(){
        timers[n].textContent = --i;
        if(i<=0){
            clearInterval(timerId);
            timers[n].style.color="white";
            for (let radio of radios[n]){
                radio.disabled = true;
            }
        }
    }, 1000);

}

show1.addEventListener('click', ()=>{
    showQuestion(0);
    setTimer(0);
});

show2.addEventListener('click', ()=>{
    showQuestion(1);
    setTimer(1);
});

show3.addEventListener('click', ()=>{
    showQuestion(2);
    setTimer(2);
});
show4.addEventListener('click', ()=>{
    showQuestion(3);
    setTimer(3);
});
show5.addEventListener('click', ()=>{
    showQuestion(4);
    setTimer(4);
});
show6.addEventListener('click', ()=>{
    showQuestion(5);
    setTimer(5);
});
show7.addEventListener('click', ()=>{
    showQuestion(6);
    setTimer(6);
});
show8.addEventListener('click', ()=>{
    showQuestion(7);
    setTimer(7);
});
show9.addEventListener('click', ()=>{
    showQuestion(8);
    setTimer(8);
});
show10.addEventListener('click', ()=>{
    showQuestion(9);
    setTimer(9);
});
show1.addEventListener('click', ()=>{
    showQuestion(10);
    setTimer(10);
});

check.addEventListener('click', ()=>{
    let sum=0;
    for (let radio of radios){
        for (let option of radio){
            if(option.checked){
                usersAnswers.push(option.value);
            }
        }
    }
    for(i=0; i<usersAnswers.length; i++){
        sum+= +usersAnswers[i];
    }
    let score = sum*10;
    if (score === 100){
        result.textContent = `Поздравляем! Вы ответили верно на ${score}% вопросов!`;
    } else if (score>60 && score<100){
        result.textContent = `Хороший результат! Вы ответили верно на ${score}% вопросов!`;
    } else if (score<=60){
        result.textContent = `Вы ответили верно на ${score}% вопросов. Повторите функции и попробуйте снова.`;
    }

    restart.disabled = false;
})

restart.addEventListener('click', ()=>{
    window.location.reload();
});