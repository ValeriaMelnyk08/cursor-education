
let newElement = document.createElement("p");
document.body.append(newElement);
newElement.innerText = 'Гарного дня';
newElement.classList.add("newElement");
newElement.style.textAlign = "center";
newElement.style.color = "white";

const newFontGenerator = {
    generator(n) {
        let i = n; 
        return {
            next (move) {
                if (move === 'increase') {
                    return { value: i += 2};
                }

                if (move === 'decrease') {
                    return {value: i -= 2};
                }
            }
        }
    }
}

let fontSize = "";
const iterator = newFontGenerator.generator(14);


const btnIncrease = document.getElementById('increase');
btnIncrease.addEventListener('click', () => {
    fontSize = 'increase';
    const size = iterator.next(`${fontSize}`).value;
    newElement.style.fontSize = size + 'px';
    console.log(size);
})


const btnDecrease = document.getElementById('decrease');
btnDecrease.addEventListener('click', () => {
    fontSize = 'decrease';
    const size = iterator.next(`${fontSize}`).value;
    newElement.style.fontSize = size + 'px';
    console.log(size);
})




  