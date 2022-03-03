import Server from "./classes/server";
import { SERVER_PORT } from "./global/environment";
import bodyparser from 'body-parser';
import router from './routes/router';
import cors from 'cors';

const server = new Server();

//Bodyparser
server.app.use( bodyparser.urlencoded({extended: true}));
server.app.use(bodyparser.json());

//CORS
server.app.use( cors({origin: true, credentials: true}))

//Rutas servicios
server.app.use('/', router)



server.start( ()=>{
    console.log(`Servidor corriendo en el puerto ${server.port}`)
}
);