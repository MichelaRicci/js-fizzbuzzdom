console.log('JS OK')


// Consegna:
// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che
// per i multipli di 3 stampi “Fizz” al posto del numero
// per i multipli di 5 stampi “Buzz” al posto del numero.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero.

const box = document.getElementById('box');




for (let i = 1; i <= 100; i++) {

    let content = i; 


    if (i % 15 === 0) {

        content = "fizzbuzz";

    } else if  (i % 3 === 0) {

        content = "fizz";
        

    } else if (i % 5 === 0) {

        content = "buzz";

    } 


    const item = document.createElement('div');
    item.append(content);

    if (isNaN(content)) {
        item.classList.add(content.toLowerCase());
    }

    box.appendChild(item);

}





