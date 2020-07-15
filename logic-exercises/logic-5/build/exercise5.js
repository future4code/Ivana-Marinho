const horarioEmSegundo = 4000;
let minutos = 0;
let hora = 0;
let inteiro = 0;
function formataHorario(horarioEmSegundo) {
    if (horarioEmSegundo < 60) {
        return `${horarioEmSegundo}` + "s";
    }
    if (horarioEmSegundo >= 60 && horarioEmSegundo < 3600) {
        if (horarioEmSegundo % 60 === 0) {
            minutos = horarioEmSegundo / 60;
            return `${minutos}` + "m";
        }
        else {
            minutos = Math.floor(horarioEmSegundo / 60);
            inteiro = Math.floor((horarioEmSegundo % 60));
            return `${minutos}` + "m" + " " + `${inteiro}` + "s";
        }
    }
    if (horarioEmSegundo >= 3600) {
        if (horarioEmSegundo % 3600 === 0) {
            hora = horarioEmSegundo / 3600;
            return `${hora}` + "h";
        }
        else {
            hora = Math.floor(horarioEmSegundo / 3600);
            minutos = Math.floor(horarioEmSegundo % 3600);
            if (minutos % 60 === 0) {
                minutos = Math.floor(horarioEmSegundo % 3600) / 60;
                inteiro = Math.abs(Math.ceil((60 - (horarioEmSegundo % 3600))));
                return `${hora}` + "h" + " " + `${minutos}` + "m" + " " + `${inteiro}` + "s";
            }
            if (minutos > 60) {
                minutos = Math.floor((horarioEmSegundo % 3600) / 60);
                inteiro = Math.abs((60 * minutos) - (horarioEmSegundo % 3600));
                return `${hora}` + "h" + " " + `${minutos}` + "m" + " " + `${inteiro}` + "s";
            }
        }
    }
}
console.log(formataHorario(horarioEmSegundo));
//# sourceMappingURL=exercise5.js.map