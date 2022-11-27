
// BOTAO DE LIMPAR ELEMENTOS DO HTML
function limpar(){
    const apagarvalor = document.querySelector('#valor')
    const apagarmeses = document.querySelector('#quantidade')
    const apagarparcelas = document.querySelector('#parcela')
    const apagardependente = document.querySelector('#dependenteqt')
    const apagarinss = document.querySelector('#resultinss')
    const apagarirpf = document.querySelector('#resultirpf')
    const apagartotal = document.querySelector('#result')
    apagarvalor.value = "";
    apagarmeses.value = "";
    apagarparcelas.value = "";
    apagardependente.value = "";
    apagarinss.innerHTML = "";
    apagarirpf.innerHTML = "";
    apagartotal.innerHTML = "";
}


// CALCULADORA 13 SALARIO 
function calculaSalario() {
    // VARIAVEIS QUE RETIRA ELEMENTOS DO HTML 
    var valor = document.getElementById("valor").value;
    quantidade = document.getElementById("quantidade").value;

    // CALCULO DA TAXA DO INSS 
    var salario = valor / 12 * quantidade;
    var inss = 0;
    if (salario <= 1212.00) {
        inss =  salario * 0.075
    } else if (salario <= 2427.35) {
        inss = (salario - 1212.01) * 0.09 + (90.90)
    } else if (salario <= 3641.03) {
        inss = (salario - 2427.36) * 0.12 + (109.38 + 90.90)
    } else if (salario <= 7087.22) {
        inss = (salario - 3641.04) * 0.14 + (145.64 + 200.28)
    }else if (salario >= 7087.23) {
        inss = (salario - 7087.22) * 0.14 + (195.89 + 200.28)
    }

    // CALCULO DE DEPENDENTES
    qtddependente = document.getElementById("dependenteqt").value;
    vxdependente = qtddependente;
    valordependete = 0;
    if (qtddependente == 0){

    } else if(qtddependente == 1){
        valordependete = 189.59
    } else if(qtddependente >= 2){
        valordependete = vxdependente*189.59;
    }

    // CALCULO DE % DO IRPF SOBRE O SALARIO COM DESCONTO DO INSS
    var inssfim = salario - inss;
    var valorinss = inssfim - valordependete;
    var irpfaqui = 0;
    if (valorinss <= 1903.98) {
        irpfaqui = 0
    } else if (valorinss <= 2826.65) {
        irpfaqui = 0.075
    } else if (valorinss <= 3751.05) {
        irpfaqui = 0.15
    } else if (valorinss <= 4464.68) {
        irpfaqui = 0.225
    } else if (valorinss >= 4664.69) {
        irpfaqui = 0.275
    }

    // CALCULO DO IRPF FINAL COM DESCONTO SOBRE A ALIQUOTA
    var vxalqui = valorinss * irpfaqui;
    var inssirpf = vxalqui;
    var desconto = 0;
    if (valorinss <= 1903.98) {
        desconto = 0
    } else if (valorinss <= 2826.65) {
        desconto = 142.80
    } else if (valorinss <= 3751.05) {
        desconto = 354.80
    } else if (valorinss <= 4464.68) {
        desconto = 636.13
    } else if (valorinss >= 4664.69) {
        desconto = 869.36
    } 
    var resultirpf = inssirpf - desconto ;
    var resultirpfdesc = resultirpf;
    var fim = inssfim - resultirpfdesc;
    var resultfimdesc = fim;
    var parcela2 = resultfimdesc - salario / 2;
    var parcela1 = salario / 2;
    var dinheiro = resultfimdesc;

    // CONVERTE A VARIAVEL PARA O VALOR DA MOEDA REAL
    var dinheiroformatado = new Intl.NumberFormat('pt-BR',{
        style: 'currency',
        currency: 'BRL',
    }).format(resultfimdesc);
    var dinheiroparcela1 = parcela1;
    var dinheiroformatado2 = new Intl.NumberFormat('pt-BR',{
        style: 'currency',
        currency: 'BRL',
    }).format(parcela1);
    var dinheiroparcela2 = parcela2;
    var dinheiroformatado3 = new Intl.NumberFormat('pt-BR',{
        style: 'currency',
        currency: 'BRL',
    }).format(parcela2);
    var dinheiroinss = inss;
    var dinheiroformatado4 = new Intl.NumberFormat('pt-BR',{
        style: 'currency',
        currency: 'BRL',
    }).format(dinheiroinss);
    var dinheiroformatado5 = new Intl.NumberFormat('pt-BR',{
        style: 'currency',
        currency: 'BRL',
    }).format(resultirpf);
    var dinheiroformatado6 = new Intl.NumberFormat('pt-BR',{
        style: 'currency',
        currency: 'BRL',
    }).format(valordependete);

    // VARIAVEIS PARA EXIBIR O RESULTADO NO HTML
    var select = document.getElementById("parcela").value;
    if ( select == 2) {
        text = "1ª: " + dinheiroformatado2 + "" + " 2ª: " + dinheiroformatado3 + ""; /* Primeira parcela */
    } else if (select == 1) {
        text = "" +  dinheiroformatado + ""; /*parcela unica */
    }
    inssresult = "-" + dinheiroformatado4 + "";
    irpfresult = "-" + dinheiroformatado5 + "";
    dependenteresult = "" + dinheiroformatado6 + "";
    document.getElementById("result").innerHTML = text;
    document.getElementById("resultinss").innerHTML = inssresult;
    document.getElementById("resultirpf").innerHTML = irpfresult;
    document.getElementById("valordependete").innerHTML = dependenteresult;

}
