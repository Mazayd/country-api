import { CountryModel } from '../model/country.model.mjs';

export class CountryController {
  constructor () {
    this.countryModel = new CountryModel();
  }

  test(req, res) {
    res.send('Test done!');
  }

  getCounry(req, res) {
    const code = req.query.code;
    
    const country = this.countryModel.getCountry(code);
    res.send(country);
  }

  getCounries(req, res) {
    const countries = this.countryModel.getCountries();
    res.send(countries);
  }

  createCountry(req, res) {
    const country = req.body;
    this.countryModel.createCountry(country.code, country.data);
    res.send('Success');
  }

  deleteCountry(req, res){
    const { code } = req.params;
    this.countryModel.deleteCountry(code);
    res.send('Success');
  }
}