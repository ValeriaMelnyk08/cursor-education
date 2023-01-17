window.addEventListener('keydown', function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    const button = document.querySelector(`.button[data-key="${e.keyCode}"]`);

    if(!audio) return;//зупиняє роботу всіх функцій разом
    audio.pause();
    audio.currentTime = 0;//перемотує назад
    audio.play();
    button.classList.add('playing');
});

//=========================================================================================================================================================

function removeTransition(elem){
    if (elem.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const buttons = document.querySelectorAll('.button');
buttons.forEach(button => button.addEventListener('transitionend', removeTransition));

//=========================================================================================================================================








