function qtdDeMassa(tamDoPao, quantosPaes) {
    return tamDoPao * quantosPaes;
}
var farinha=qtdDeMassa*0.56;
var agua=qtdDeMassa*0.28;
var levain=qtdDeMassa*0.14;
var sal= qtdDeMassa*0.02;
console.log(`Você precisará de: ${farinha}de farinha, ${agua}de água, ${levain} de levain ${sal} de sal`)

