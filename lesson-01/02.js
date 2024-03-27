let number1 = Math.floor(Math.random() * 100);

function isEvenNumber(number) {
    return number % 2 === 0 ? `${number}:Это четное число` : `${number}:Это нечетное число`
}

console.log(isEvenNumber(number1))
