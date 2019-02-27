const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');

const Countries = function() {
  this.countriesData = null;
}

Countries.prototype.bindEvents = function () {

  PubSub.subscribe('SelectView:change', (evt) => {
    const selectedIndex = evt.detail;
    console.log(selectedIndex);
    this.publishCountryDetail(selectedIndex);
  })
}


Countries.prototype.publishCountryDetail = function (selectedIndex) {
  const selectedCountry = this.countriesData[selectedIndex];
  PubSub.publish('Countries:selected-country-ready', selectedCountry);
}

Countries.prototype.getData = function () {

  request = new RequestHelper('https://restcountries.eu/rest/v2/all');
  request.get( (data) => {
    this.countriesData = data;
    PubSub.publish('Countries:countries-loaded', this.countriesData);
  });
};
module.exports = Countries;
