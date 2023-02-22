console.log('More while loops for homework, last one I promise');

let secretNum = Math.floor(Math.random()*9)+1;
let buttons = document.querySelectorAll('.options button');
let replayBtn = document.querySelector('.again button');
document.querySelector('.again').style.display = 'none';

let guess = null;
let attempts = null;
let hasWon = false;
let streak = null;

function handleUserGuess(e) {
    guess = Number(e.target.dataset.num);
    
    if (!hasWon) {
        if (guess === secretNum) {
            document.querySelector('.result').textContent = `You guessed it! The number was ${secretNum}`;
            hasWon = true;
            buttons.forEach( (button) => {
                button.disabled = true;
            });
            
            if (attempts < 8) {
                streak++;
                document.querySelector('.streak').textContent = `Streak: ${streak}`;
            } else {
                streak = 0;
            }
    
            document.querySelector('.again').style.display = 'inline-block';
            return;
    
        } else {
            document.querySelector('.result').textContent = `Wrong guess - it wasn't ${guess}`;
            attempts++;
            document.querySelector('header p').innerText = `Attempts: ${attempts}`;
            e.target.disabled = true;
            
            // let holder = document.createElement('span');
            // holder.classList.add('wrong-guess');
            // holder.textContent = e.target.textContent;
            // e.target.parentNode.replaceChild(holder, e.target);
        }
    }
    
}

function handlePlayAgain() {
    hasWon = false;
    secretNum = Math.floor(Math.random()*9)+1;
    document.querySelector('h2').textContent = 'Guess a number between 1 and 9';
    attempts = 0;
    document.querySelector('.attempts').innerText = `Attempts: ${attempts}`;
    document.querySelector('.streak').innerText = `Streak: ${streak}`;
    buttons.forEach((button) => {
        button.disabled = false;
    });
    document.querySelector('.again').style.display = 'none';
}


for (btn of buttons) {
    btn.addEventListener('click', handleUserGuess);
}

replayBtn.addEventListener('click', handlePlayAgain);

