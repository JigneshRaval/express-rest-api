"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const carData = require('../../data/cars.json');
exports.default = (request, response) => {
    const models = carData.models;
    response.status(200).json({ models });
};
//# sourceMappingURL=car.model.js.map