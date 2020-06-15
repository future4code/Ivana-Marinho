import * as moment from "moment";
export interface Pessoa{
    id: string,
    name: string,
    email: string,
    dataDeNascimento: moment.Moment
}