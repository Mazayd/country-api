export class CountryController {
  constructor () {}

  test(req, res) {
    res.send('Test done!');
  }

  getCounry(req, res){
    const country = {
      country: 'Poland',
      cities: ['Warsaw', 'Olsztyn']
    };
    res.send(country);
  }
}