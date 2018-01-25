const carData = require('../../data/cars.json');

export default (request: any, response: any) => {
    const models = carData.models;

    response.status(200).json({ models });
};
