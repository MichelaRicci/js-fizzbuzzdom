console.log('JS OK')


// Consegna:
// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che
// per i multipli di 3 stampi “Fizz” al posto del numero
// per i multipli di 5 stampi “Buzz” al posto del numero.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero.

let box = document.getElementById('box');




for (let i = 1; i <= 100; i++) {

    let number = document.createElement('div');

    number.innerHTML = i;

    box.append(number);


    if (i % 15 === 0) {

        number.classList.add("fizzbuzz");
        number.innerHTML = "fizzbuzz";

    } else if  (i % 3 === 0) {
        number.classList.add("fizz");
        number.innerHTML = "fizz";
        

    } else if (i % 5 === 0) {

        number.classList.add("buzz");
        number.innerHTML = "buzz";

    } 

    console.log(number);


}


