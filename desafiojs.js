var valorInicial= Number (prompt("Escreva o Valor Inicial"));
var valorFinal= Number (prompt("Escreva o Valor Final"));
var incremento= Number (prompt("Escreva o Incremento"));

var res=0;

for (valorInicial; valorInicial<=valorFinal;valorInicial+incremento)
{res=Math.log (valorInicial);
console.log(res);};

