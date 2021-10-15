
let numeroUtente =  prompt ("inserisci un numero");
let numeroPari = numeroUtente % 2;
let numeroSuccessivo = parseInt(numeroUtente) + 1;


if (numeroPari === 0) {
    alert(numeroUtente);
} else {
    alert(numeroSuccessivo);
}