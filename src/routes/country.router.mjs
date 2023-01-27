import { Router } from 'express';
import { CountryController } from '../controller/country.controller.mjs';
import { adminMiddlewaree } from '../middlewaree/admin.middlewaree.mjs';

const countryRouter = new Router();

const countryController = new CountryController();

countryRouter.get('/test', countryController.test.bind(countryController));

countryRouter.get('/country', countryController.getCounry.bind(countryController));

countryRouter.get('/countries', adminMiddlewaree(['USER']), countryController.getCounries.bind(countryController));

countryRouter.post('/countries', countryController.createCountry.bind(countryController));

countryRouter.delete('/countries/:code',   countryController.deleteCountry.bind(countryController));

export { countryRouter }