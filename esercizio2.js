const array1 = [15, 2, 7];
const array2 = [5];

/* const array1 = ['ciao'];
const array2 = ['hola', 'hello']; */


/* Controllo le lunghezze degli array */

while (array1.length != array2.length) {

/* se il primo array è più piccolo aggiungo elementi  */
   
    if (array1.length < array2.length) {
        let numberRandom = Math.floor(Math.random() * 100);
        array1.push(numberRandom);

/* se il secondo array è più piccolo aggiungo elementi */    
        
    } else if (array2.length < array1.length) {
        let numberRandom = Math.floor(Math.random() * 100);
        array2.push(numberRandom);
    } 
    
}

/* controllo se la lunghezza degli array è uguale e se tutto è andato a buon fine mando alert e stampo gli array*/

if (array1.length === array2.length) {
    
    alert( "i due array hanno lo stesso numero di elementi");
    console.log(array2);
    console.log(array1);

}