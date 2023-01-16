import { Reader } from '../lib/reader.mjs';

export class CountryModel {
  constructor (filename = './data/country.json') {
    this.DB = new Reader(filename);
  }

  getCountries() {
    return this.DB.getData();
  }

  getCountry(code) {
    return this.DB.getData()[code];
  }

  createCountry(code, data) {
    this.DB.addData(code, data);
    return data;
  }

  deleteCountry(code){
    return this.DB.deleteData(code);
 
  }
}