
import * as fastify from "fastify";
//import routes from "app/routes";
import { log } from "config/logging";
//const port    = process.env.PORT || require('config/config').port;
import { port } from "config/config";

const start = async () => {
  try {
    const app: fastify.FastifyInstance = fastify();
    //routes(app);
    app.listen(port, '0.0.0.0');
    log.info(`Download Server Started - Listening on port: ${port}`);
  } catch (err) {
    log.error("Failed to Start Download Server:", err);
  }
}

start();

