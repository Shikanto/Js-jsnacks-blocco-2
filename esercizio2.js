/* const array1 = [15, 2, 7];
const array2 = [5]; */

/* Creo elemento random da aggiugnere */
let numberRandom = Math.floor(Math.random() * 100);

/* definisco i due array */
const array1 = ['ciao'];
const array2 = ['hola', 'hello'];

/* Controllo se la lunghezza del primo è minore del secondo */

while (array1.length < array2.length) {
    array1.push(numberRandom);
} 

/* Controllo se la lunghezza del secondo è minore del secondo */

while (array2.length < array1.length) {
    array2.push(numberRandom)
} 

/* Quando sono uguali mando un alert e stampo i due array */

if (array1.length === array2.length) {
    alert( "i due array hanno lo stesso numero di elementi");
    console.log(array1);
    console.log(array2);
}