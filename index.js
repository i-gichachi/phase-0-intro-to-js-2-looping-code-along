function writeCards(names, occassion){
    const messages = []
    for(let i = 0; i<names.length; i++){
        messages.push(`Thank you, ${names[i]}, for the wonderful ${occassion} gift!`)
    }
    return messages
}

const messages = writeCards(["Charlie", "Samip", "Ali"], "surprise");
console.log(messages);

function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
 }

const countdown = countDown(10);
console.log(countdown);