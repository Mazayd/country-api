import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const countryShema = new Schema({
    _id: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      required: true,
    },
    capital: {
      type: String,
      required: true,
    },
    code_country: {
      type: String,
      required: true,
    },
    code_telefon_number: {
      type: String,
      required: true,
    },
    capital_coordinates: {
      type: String,
      required: true,
    },
    number_of_cities: {
      type: String,
      required: true,
    },
    population: {
      type: String,
      required: true,
    },
  })
  
  export const Country = mongoose.model('Country', countryShema);