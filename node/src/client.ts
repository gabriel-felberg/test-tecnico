import { Client } from "pg"
import fs from "fs"
import "dotenv/config"

const AppClient = new Client(
    {
        host: process.env.DB_HOST,
        port: 5432,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB ? process.env.DB : process.env.DB_USER
    }
)

async function runScript() {
    try {
      await AppClient.connect();
  
      const script = fs.readFileSync('tables.sql', 'utf8');
      console.log(script);
      
  
      await AppClient.query(script);
      console.log('Script SQL executado com sucesso.');
  
      // await AppClient.end();
    } catch (err) {
      console.error('Erro ao executar o script SQL:', err);
      process.exit(1);
    }
}
runScript();

export default AppClient;