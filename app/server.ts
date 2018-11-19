/* app/server.ts */

import "reflect-metadata";
// Import everything from express and assign it to the express variable
import * as express from "express";

// Import WelcomeController from controllers entry point
import {WelcomeController} from './controller';

// Create a new express application instance
const app: express.Application = express.default();

// The port the express app will listen on
const port: number = process.env.PORT ? Number(process.env.PORT) : 3000;
const host: string = '192.168.0.140';

app.use(function (req, res, next) {
    console.log('client ip: ', req.ip, 'url:', req.originalUrl);
    next();
  });

// Mount the WelcomeController at the /welcome route
app.use('/welcome', WelcomeController);

// Serve the application at the given port
app.listen(port, host, () => {
    // Success callback
    console.log(`Listening at http://${host}:${port}/`);
});



