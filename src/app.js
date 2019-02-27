const Countries = require('./models/countries.js');
const CountryView = require('./views/country_view.js')

document.addEventListener('DOMContentLoaded', () => {
//DELETE
  console.log('JavaScript Loaded');
  const countries = new Countries();
  countries.getData();

  // const countriesContainer = document.querySelector('#country');
  // const countryView = new CountryView(countriesContainer);
  // countryView.bindEvents();

  const countriesContainer = document.querySelector('#countries');
  const countryView = new CountryView(countriesContainer);
  countryView.bindEvents();

});
