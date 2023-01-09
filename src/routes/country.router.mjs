import { Router } from 'express';
import { CountryController } from '../controller/country.controller.mjs';

const countryRouter = new Router();

const countryController = new CountryController();

countryRouter.get('/test', countryController.test.bind(countryController));


export { countryRouter }