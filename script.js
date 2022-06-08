function analisar(){
    var tempo = document.getElementById("tempo").value;
    var horarioD = document.getElementById("horarioD").value;
    var luz = document.getElementById("luz").value;

    if(tempo < 7 && horarioD < 6 && luz == "muito"){

        alert("Você está dormindo pouco e seu sono não está sendo muito reparador, tente dormir mais cedo, por mais tempo e deixe seu quarto mais escuro.");

    }else if(tempo >= 7 && horarioD < 6 && luz == "muito"){

        alert("Você está dormindo tempo suficiente, porém seu quarto permanece iluminado durante o sono e você está dormindo muito tarde, tente diminuir a luz do ambiente e dormir antes das 23 horas.");

    }else if(tempo >= 7 && horarioD < 6 && luz == "pouco"){

        alert("Você está dormindo tempo suficiente e seu quarto está escuro, porém você está indo dormir muito tarde, tente ir no máximo até as 23 horas.");
        
    }else if(tempo >= 7 && horarioD < 23 && horarioD > 19 && luz == "muito"){

        alert("Você está dormindo tempo suficiente e no horário certo, porém seu quarto está muito claro, tente reduzir o foco de luz");

    }else if(tempo < 7 && horarioD < 23 && horarioD > 19 && luz == "pouco"){

        alert("Você está indo dormir no horário certo e seu quarto está escuro, contudo o periodo de sono foi curto, tente dormir por mais tempo.");

    }else if(tempo < 7 && horarioD < 23 && horarioD > 19 && luz == "muito"){

        alert("Você está indo dormir no horário certo, porém está dormindo pouco e com muita iluminação no quarto, apague as luzes e durma por mais tempo.");

    }else if(tempo < 7 && horarioD < 6 && luz == "pouco"){

        alert("Seu quarto está escuro, porém você está dormindo tarde e por pouco tempo, tente dormir até 23 horas e por mais tempo.");

    }else if(tempo >= 7 && horarioD < 23 && horarioD > 19 && luz == "pouco"){

        alert("Seu sono está bom, continue dormindo no horário certo, com quarto escuro e por tempo suficiente.");

    }else{
        alert("Por Favor preencha as informações requeridas antes de analisar a qualidade do seu sono");
    }
}

function salvar(){
    var nome = document.getElementById("nome").value;
    var sobrenome = document.getElementById("sobrenome").value;
    var idade = document.getElementById("idade").value;
    var tempo = document.getElementById("tempo").value;
    var horarioD = document.getElementById("horarioD").value;
    var luz = document.getElementById("luz").value;
    var detalhes = document.getElementById("detalhes").value;
  
    localStorage.setItem("n", nome);
    localStorage.setItem("s", sobrenome);
    localStorage.setItem("i", idade);
    localStorage.setItem("t", tempo);
    localStorage.setItem("h", horarioD);
    localStorage.setItem("l", luz);
    localStorage.setItem("d", detalhes);
}

function carregar(){
    if("n" in localStorage){

      var nome = localStorage.getItem("n");
      document.getElementById("nome").value = nome;

    }
    if("s" in localStorage){

      var sobrenome = localStorage.getItem("s");
      document.getElementById("sobrenome").value = sobrenome;

    }
    if("i" in localStorage){

      var idade = localStorage.getItem("i");
      document.getElementById("idade").value = idade;

    }
    if("t" in localStorage){

      var tempo = localStorage.getItem("t");
      document.getElementById("tempo").value = tempo;

    }
    if("h" in localStorage){

      var horarioD = localStorage.getItem("h");
      document.getElementById("horarioD").value = horarioD;

    }
    if("l" in localStorage){

      var luz = localStorage.getItem("l");
      document.getElementById("luz").value = luz;

    }
    if("d" in localStorage){

      var detalhes = localStorage.getItem("d");
      document.getElementById("detalhes").value = detalhes;

    }
}

function limpar(){
    localStorage.clear();
    document.getElementById("nome").value = "";
    document.getElementById("sobrenome").value = "";
    document.getElementById("idade").value = "";
    document.getElementById("tempo").value = "";
    document.getElementById("horarioD").value = "";
    document.getElementById("luz").value = "";
    document.getElementById("detalhes").value = "";
}