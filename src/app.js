"use strict";
// app.ts
Object.defineProperty(exports, "__esModule", { value: true });
// Ref : https://blog.risingstack.com/building-a-node-js-app-with-typescript-tutorial/
// import everything from express
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
// import another routes from routers.ts
const routers_1 = require("./routers");
const car_model_1 = require("./models/car.model");
/*
In this file, we are creating a class called App, which will encapsulate our web server.
It has a private method called mountRoutes, which mounts the routes served by the server.
The express instance is reachable through the public express property.
*/
class App {
    constructor() {
        this.express = express(); // we are passing express() function to above created express public variable
        this.mountRoute();
    }
    /**
     * @function mountRoute
     * @returns nothing
     */
    mountRoute() {
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
        router.get('/', (request, response) => {
            let user_id = request.query.id; // Getting parameter passed in URL query string using request.params[], request.body and request.query
            // Send response to user
            response.json({
                id: user_id,
                page: 'Home Page',
                message: 'Hello World! 222'
            });
        });
        // Other routes like http://localhost:3000/cars
        router.get('/cars2', car_model_1.default);
        // Other routes like http://localhost:3000/
        this.express.use('/', router);
        // Other routes like http://localhost:3000/cars or http://localhost:3000/cars/brands or http://localhost:3000/cars/models
        this.express.use('/cars', routers_1.carRouter);
        // Catch all other routes and return the index file
        this.express.get('*', (request, response) => {
            console.log(request.URL);
            response.sendFile(path.join(__dirname, 'index.html'));
        });
    }
}
exports.default = new App().express;
//# sourceMappingURL=app.js.map