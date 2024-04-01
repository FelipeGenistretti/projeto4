function calc(){
    let num1 =parseInt(document.getElementById('num1').value);
    let num2 =parseInt(document.getElementById('num2').value);

    document.getElementById("resultado").innerHTML=num1 * num2;
}

function inserir() {
    let numero= document.getElementById("posicao").value;
    let novo= document.getElementsById("novo").value;
    document.getElementsByClassName("time") [numero].innerHTML = novo;
}