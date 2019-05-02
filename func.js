function imc(){
    var peso = (document.getElementById("v1").value);
    var altura = (document.getElementById("v2").value);

    imc = peso/ (altura * altura);

    if(imc < 16){
        document.getElementById("grave").innerHTML = "IMC: " + imc.toFixed(2) + " Magreza Grave ";
    }

    else if(imc >= 16 && imc < 17){
        document.getElementById("medio").innerHTML = "IMC: " + imc.toFixed(2) + " Magreza Moderada";
    }

    else if(imc >= 17 && imc < 18.5){
        document.getElementById("medio").innerHTML = "IMC: " + imc.toFixed(2) + " Magreza Leve";
    }

    else if(imc >= 18.5 && imc < 25){
        document.getElementById("bom").innerHTML = "IMC: " + imc.toFixed(2) + " Saudável";
    }

    else if(imc >= 25 && imc < 30){
        document.getElementById("medio").innerHTML = "IMC: " + imc.toFixed(2) + " Sobrepeso";
    }

    else if(imc >= 30 && imc < 35){
        document.getElementById("grave").innerHTML = "IMC: " + imc.toFixed(2) + " Obesidade";
    }

    else if(imc >= 35 && imc < 40){
        document.getElementById("grave").innerHTML = "IMC: " + imc.toFixed(2) + " Obesidade Severa";
    }

    else if(imc >= 40){
        document.getElementById("grave").innerHTML = "IMC: " + imc.toFixed(2) + " Obesidade Mórbida";
    }
}
