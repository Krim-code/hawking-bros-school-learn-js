printBlock = document.querySelector('.printBlock');

function sendForm(e) {
    e.preventDefault();
    let keyBox = document.search.key;
    let val = keyBox.value;

    try {
        if (isInt(val) == false) {
            throw new Error("Не число");
        } else if (val.length == 0) {
            throw new Error("Запись пуста");
        } else if (val.length < 5 && val.length >= 1 || val.length > 10) {
            throw new Error("Запись больше 10 или меньше 5");
        } else {
            printBlock.insertAdjacentHTML('afterend', '<p>Всё хорошо</p>');
        }

    } catch (error) {
        printBlock.insertAdjacentHTML('afterend', `<p>${error.message}</p>`);
    }
}


let sendButton = document.search.send;
sendButton.addEventListener("click", sendForm);


function isInt(value) {
    return !isNaN(value) &&
        parseInt(Number(value)) == value &&
        !isNaN(parseInt(value, 10));
}