import * as express from 'express';
import { rootRouter } from './routes';
const server = express();
//Make Sure to put more specific routes above the Root Router
server.use('/', rootRouter);
export { server };
