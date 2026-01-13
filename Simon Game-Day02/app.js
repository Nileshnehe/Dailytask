let gameSeq = [];
let userseq = [];
let btns = ['red', 'yellow', 'green', 'purple'];

let h2 = document.querySelector('h2')

let started = false;
level = 0;

document.addEventListener('keypress', function () {

    if (started == false) {
        console.log('game started');
        started = true;

        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove('flash');
    }, 200);
}

function userFlash(btn) {
    btn.classList.add('userFlash');
    setTimeout(function () {
        btn.classList.remove('userFlash');
    }, 200)

}

function levelUp() {
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`

    let randIdx = Math.floor(Math.random() * btns.length);
    let randomColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor)
    console.log(gameSeq)
    gameFlash(randBtn)
}

function checkAns() {
    let idx = userseq.length -1;

    if (userseq[idx] === gameSeq[idx]) {
        if (userseq.length === gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `Game Over! Your Score was <b>${level}</b> <br> Press Any Key start The Game`
        document.querySelector('body').style.backgroundColor = 'red'
        setTimeout(function() {
            document.querySelector('body').style.backgroundColor = 'white'
        },150)
        reset();
    }

    
}

function btnPress() {
   
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute('id')
    
    userseq.push(userColor)
    
    checkAns();
}

let allBtns = document.querySelectorAll('.btn');
for (btn of allBtns) {
    btn.addEventListener('click', btnPress)
}

function reset() {
    started = false;
    gameSeq = [];
    userseq = [];
    level = 0
}