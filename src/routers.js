"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
exports.carRouter = express_1.Router();
// http://localhost:3000/cars/brands
exports.carRouter.get('/brands', (req, res) => {
    res.send('Audi, BMW, Mercedes');
});
// http://localhost:3000/cars/models
exports.carRouter.get('/models', (req, res) => {
    res.send({ 'name': 'Anudi Q5' });
});
//# sourceMappingURL=routers.js.map