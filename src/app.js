const Countries = require('./models/countries.js');
const SelectView = require('./views/select_view.js');
const CountryInfoView = require('./views/country_info_view.js');

document.addEventListener('DOMContentLoaded', () => {

  const countries = new Countries();
  countries.getData();
  countries.bindEvents();

  const countriesContainer = document.querySelector('#countries');
  const selectView = new SelectView(countriesContainer);
  selectView.bindEvents();

  const countryDetailContainer = document.querySelector('#country');
  const countryInfoView = new CountryInfoView(countryDetailContainer);
  countryInfoView.bindEvents();

});
