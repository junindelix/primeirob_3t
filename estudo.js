let tabuada = 111;
function escreva(){
    document.write("Tabuada do " + tabuada + "<br>");
    
    document.write(tabuada + " x 1 = " + (tabuada*1) + "<br>");
    document.write(tabuada + " x 2 = " + (tabuada*2) + "<br>");
    document.write(tabuada + " x 3 = " + (tabuada*3) + "<br>");
    document.write(tabuada + " x 4 = " + (tabuada*4) + "<br>");
    document.write(tabuada + " x 5 = " + (tabuada*5) + "<br>");
    document.write(tabuada + " x 6 = " + (tabuada*6) + "<br>");
    document.write(tabuada + " x 7 = " + (tabuada*7) + "<br>");
    document.write(tabuada + " x 8 = " + (tabuada*8) + "<br>");
    document.write(tabuada + " x 9 = " + (tabuada*9) + "<br>");
    document.write(tabuada + " x 10 = " + (tabuada*10) + "<br>");
}

let lista = ["professor" , "professor" , "professor" , "professor"]

function mostraLista(){
    document.write("Tamanho da Lista" + lista.length + "<br>");
    for(let i = 0; i < lista.length; i++){
        document.write("professor:" + lista[i] + "<br>")

    }
  }
  function multiplica(){
     for(let i = 1; i <= 10; i++){
        document.write("O valor do i = " + i + "<br>");
        for(let j = 1; j <= 10; j++){
        document.write(i + " x "+j+" = " + (i*j) + "<br>");
        }
        document.write("<br>");
     }

  }
function total(){
    let v = document.getElementById("valor").value;
    let j = document.getElementById("juros").value;
    let t = document.getElementById("meses").value;
    for(let i = 1;  i <= t; i++){
    let r = v * (1+(j/100));
    v = r; 
    }
    document.write("Resultado" + r);

}

function média(){}
let n1 = document getElementById("n1"),value;
let n2 = document.getElementById"n2"),value;
let n3 = 