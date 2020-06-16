import {IdGenerator} from "./services/IdGenerator";
import knex from "knex";
import dotenv from "dotenv";
import express , { Request, Response } from "express";

dotenv.config();
const app = express();
app.use(express.json());

const server= app.listen(process.env.POR || 3003, () =>{
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
      } else {
        console.error(`Failure upon starting server.`);
      }
    });;