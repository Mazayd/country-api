import { CountryModel } from '../model/country.model.mjs';
import { Country } from '../shema/country.shema.mjs';

export class CountryController {
  constructor () {
    this.countryModel = new CountryModel();
  }

  test(req, res) {
    res.send('Test done!');
  }

  async getCounry(req, res) {
    const code = req.query.code;
    
    const country = await this.countryModel.getCountry(code);
    res.send(country);
  }

  async getCounries(req, res) {
    const countries = await this.countryModel.getCountries();
    res.send(countries);
  }

  async createCountry(req, res) {
    try {
      await Country.create(req.body);
      res.send('Success');
    } catch(error) {
      res.send(error);
    };

  }

  async deleteCountry(req, res){
    const { code } = req.params;
    await this.countryModel.deleteCountry(code);
    res.send('Success');
  }
}

