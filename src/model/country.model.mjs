import { Reader } from '../lib/reader.mjs';
import { Country } from '../shema/country.shema.mjs';


export class CountryModel {
  constructor (filename = './data/country.json') {
    this.DB = new Reader(filename);
  }

  async getCountries() {
    return await Country.find();
  }

  async getCountry(code) {
    return await Country.findById(code);
  }

  createCountry(code, data) {
    this.DB.addData(code, data);
    return data;
  }

  async deleteCountry(code){
    return await Country.findByIdAndDelete(code);
  }

}

