const buttons = document.querySelectorAll('button')
const answers = document.querySelectorAll('p')
const images = document.querySelectorAll('button img')

const handleBtnClick = (questionNumber) => {
    answers.forEach((answer , index) => {
        if (questionNumber == index) {
            answer.classList.remove('hidden');
            images[index].src = "./assets/images/icon-minus.svg";
            buttons[index].setAttribute('aria-expanded' , 'true');
        } else {
            answer.classList.add('hidden');
            images[index].src = "./assets/images/icon-plus.svg";
            buttons[index].setAttribute('aria-expanded' , 'false');
        }
    });
}

buttons.forEach((button , index) => {
    button.addEventListener('click' , () => handleBtnClick(index))
});