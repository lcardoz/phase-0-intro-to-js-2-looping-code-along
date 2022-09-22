// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy Birthday to me!`);
// }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     }
//     return gifts;
// }
// wrapGifts(gifts);


const messages = [];

function writeCards(names, events) {
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${events} gift!`);
    }
    return messages;
}

writeCards(names, events);


function countDown(num) {
    while (num >= 0) {
        console.log(num--);
    }
}
