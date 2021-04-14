import { Connection, createConnection, SimpleConsoleLogger } from "typeorm";
import dotenv from 'dotenv';

dotenv.config({});
class Database {

  public connection: Connection;

  constructor() {
    this.connectToDB();
  }

  private connectToDB(): void {
    createConnection({
      type: envString("mysql", "sqlite"),
      host: envString(process.env.DATABASE_HOST!, ""),
      port: envString(Number(process.env.DATABASE_PORT!), 0),
      username: envString(process.env.DATABASE_USERNAME!, ""),
      password: envString(process.env.DATABASE_PASSWORD!, ""),
      database: envString(process.env.DATABASE_NAME!, "./db.sqlite"),
      entities: [
        __dirname + "/entity/*.ts",
        __dirname + "/entity/*.js"
      ],
      synchronize: true,
      logging: false
    }).then(_con => {
      this.connection = _con;
      console.log("Connected to db!!");
    }).catch(console.error)
  }

}


function envString<T>(prodString: T, devString: T): T {
  return process.env.NODE_ENV === 'production' ? prodString : devString
}

export const db = new Database();