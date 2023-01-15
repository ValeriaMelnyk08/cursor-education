document.addEventListener("DOMContentLoaded" , function(){

function randomColors() {
    let changeColors = '#' + Math.floor(Math.random()*16777215).toString(16);
    return changeColors;
}

function generateBlocks() {
    
   
    for (let i = 1  ; i <=25; i++) {
        let square = document.createElement('div');//перетворює елемент на тег
        let main = document.querySelector('#main');//повертає обраний елемент 
        square.setAttribute("class", "square");//створює атрибут класу
        
        main.appendChild(square);

        square.style.backgroundColor =  randomColors();
    }

};

generateBlocks();




//===============================================================================================================================================



function generateBlocksInterval() {
    
    document.querySelectorAll('.square').forEach((element) => {
       element.style.backgroundColor =  randomColors(); 
    });
}

setInterval(generateBlocksInterval , 1000);
})