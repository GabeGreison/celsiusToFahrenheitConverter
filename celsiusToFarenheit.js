function conversao(graus){

    let numerosGrau = graus.substring(0,graus.length -1)
    let novoGrau = (Number(numerosGrau))
    let mudancaDaEscala = graus[graus.length -1].toUpperCase()
    let finalGrau =0;
    let letraDoGrau;
 
    if(mudancaDaEscala === "F"){
       finalGrau = (novoGrau - 32) * 5/9;
       letraDoGrau = "C"
 
 } else if(mudancaDaEscala === "C"){
    finalGrau = (novoGrau * 9/5) + 32;
       letraDoGrau = "F"
 
 } else(console.log('Escala não encontrada'))
    
    
    return finalGrau + letraDoGrau
 }
 
 console.log(conversao("45c"))