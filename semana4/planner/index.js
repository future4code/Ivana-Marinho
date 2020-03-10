function adicionaTarefa(){
    const input = document.querySelector("input");
    const tarefaDigitada = input.value;

    const select = document.querySelector("select");
    const valorSelect = select.value;

        let idDaSemana;

        if(tarefaDigitada === ""){
            alert("Digite um item");
        }else{
            switch (valorSelect){
                case "Segunda":
                    idDaSemana = document.getElementById("seg");
                    idDaSemana.innerHTML += "<li>" + tarefaDigitada + "</li>";
                    input.value = "";
                    break;

                case "Terça":
                    idDaSemana = document.getElementById("ter");
                    idDaSemana.innerHTML += "<li>" + tarefaDigitada + "</li>";
                    input.value = "";
                    break;

                case "Quarta":
                    idDaSemana = document.getElementById("qua");
                    idDaSemana.innerHTML += "<li>" + tarefaDigitada + "</li>";
                    input.value = "";
                break;

                case "Quinta":
                    idDaSemana = document.getElementById("qui");
                    idDaSemana.innerHTML += "<li>" + tarefaDigitada + "</li>";
                    input.value = "";
                break;
            
                case "Sexta":
                    idDaSemana = document.getElementById("sex");
                    idDaSemana.innerHTML += "<li>" + tarefaDigitada + "</li>";
                    input.value = "";
                break;

                case "Sábado":
                    idDaSemana = document.getElementById("sab");
                    idDaSemana.innerHTML += "<li>" + tarefaDigitada + "</li>";
                    input.value = "";
                break;
            
                case "Domingo":
                    idDaSemana = document.getElementById("dom");
                    idDaSemana.innerHTML += "<li>" + tarefaDigitada + "</li>";
                    input.value= "";
                break;
            }
        }
}

