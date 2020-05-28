import moment from "moment";
moment.locale("pt-br");

type eventos ={
    dataEHora: moment.Moment,
    nomeDoEvento: string,
    descricao: string
}

const evento: eventos[] = [
    {dataEHora: moment("28/05/2020", "DDD MMM YYYY"),
    nomeDoEvento: "Comprar pão",
    descricao: "Ir no fim da tarde"}
]

function cadastraEvento(evento: eventos[]): any{
    
}
    
