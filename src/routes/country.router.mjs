import { Router } from 'express';
import { CountryController } from '../controller/country.controller.mjs';

const countryRouter = new Router();

const countryController = new CountryController();

countryRouter.get('/test', countryController.test.bind(countryController));

countryRouter.get('/country', countryController.getCounry.bind(countryController));

countryRouter.get('/countries', countryController.getCounries.bind(countryController));

countryRouter.post('/countries', countryController.createCountry.bind(countryController));

export { countryRouter }