function imc(){
    var peso = (document.getElementById("v1").value);
    var altura = (document.getElementById("v2").value);

    imc = peso/ (altura * altura);

    if(imc < 16){
        document.getElementById("grave").innerHTML = "Magraza Grave";
    }

    else if(imc >= 16 && imc < 17){
        document.getElementById("medio").innerHTML = "Magreza Moderada";
    }

    else if(imc >= 17 && imc < 18.5){
        document.getElementById("medio").innerHTML = "Magreza Leve";
    }

    else if(imc >= 18.5 && imc < 25){
        document.getElementById("bom").innerHTML = "Saudável";
    }

    else if(imc >= 25 && imc < 30){
        document.getElementById("medio").innerHTML = "Sobrepeso";
    }

    else if(imc >= 30 && imc < 35){
        document.getElementById("grave").innerHTML = "Obesidade";
    }

    else if(imc >= 35 && imc < 40){
        document.getElementById("grave").innerHTML = "Obesidade Severa";
    }

    else if(imc >= 40){
        document.getElementById("grave").innerHTML = "Obesidade Mórbida";
    }
}
