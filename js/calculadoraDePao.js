
    function somar(){
        var tamDoPao=window.document.getElementById('tamDoPao');
         var quantosPaes=window.document.getElementById('quantosPaes');
         var n1=parseInt(tamDoPao.value);
         var n2=parseInt(quantosPaes.value);
        var res=window.document.getElementById('res');
        var totalDeMassa=n1*n2;
        var farinha=totalDeMassa*0.58;
        var agua=totalDeMassa*0.28;
        var levain=totalDeMassa*0.14;
        var sal=totalDeMassa*0.02;

        res.innerHTML =`O total de massa da receita será <strong>${totalDeMassa}</strong>`;
        far.innerHTML =`O total de farinha da receita será  <strong>${farinha.toFixed(0)}</strong>`;
        water.innerHTML =`O total de água da receita será  <strong>${agua.toFixed(0)}</strong>`;
        lev.innerHTML =`O total de levain da receita será <strong> ${levain.toFixed(0)}</strong>`;
        salt.innerHTML =`O total de sal da receita será  <strong>${sal.toFixed(0)}</strong>`;
        }


