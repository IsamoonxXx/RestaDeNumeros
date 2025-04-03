var num1 = Number(prompt('Inserta el primer numero Pelana'));
var num2 = Number(prompt('Inserta el segundo numero Pelana'));
var resta = num1 - num2;

if(num1 < num2){
    alert('El resultado de la resta es un numero negativo: ' + resta);
}


alert('BOMBA!! : ' + num1 + ' - ' + num2 + ' = ' + resta);