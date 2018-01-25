// app.ts

// Ref : https://blog.risingstack.com/building-a-node-js-app-with-typescript-tutorial/

// import everything from express
import * as express from 'express';
import * as bodyParser from "body-parser";
import * as path from 'path';

// import another routes from routers.ts
import { carRouter } from './routers';

import carsData from './models/car.model';
/*
In this file, we are creating a class called App, which will encapsulate our web server.
It has a private method called mountRoutes, which mounts the routes served by the server.
The express instance is reachable through the public express property.
*/
class App {
    public express: any; // public variable having similar name 'express', you can use any name here

    constructor() {
        this.express = express(); // we are passing express() function to above created express public variable
        this.mountRoute();
    }

    /**
     * @function mountRoute
     * @returns nothing
     */
    private mountRoute(): void {
        //let app = express()

        const router = express.Router(); // created constant and has been assigned express.Router()

        //use json form parser middlware
        this.express.use(bodyParser.json());

        //use query string parser middlware
        this.express.use(bodyParser.urlencoded({
            extended: true
        }));

        // Point static path to dist
        this.express.use(express.static(path.join(__dirname, '/')));

        this.express.use(express.static(path.join(__dirname, '/assets')));

        router.get('/', (request: any, response: any) => {
            let user_id = request.query.id; // Getting parameter passed in URL query string using request.params[], request.body and request.query

            // Send response to user
            response.json({
                id: user_id,
                page: 'Home Page',
                message: 'Hello World! 222'
            })
        });

        // Other routes like http://localhost:3000/cars
        router.get('/cars2', carsData);

        // Other routes like http://localhost:3000/
        this.express.use('/', router);

        // Other routes like http://localhost:3000/cars or http://localhost:3000/cars/brands or http://localhost:3000/cars/models
        this.express.use('/cars', carRouter);

        // Catch all other routes and return the index file
        this.express.get('*', (request: any, response: any) => {
            console.log(request.URL);
            response.sendFile(path.join(__dirname, 'index.html'));
        });
    }
}

export default new App().express;
