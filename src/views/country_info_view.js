const PubSub = require('../helpers/pub_sub.js');

const CountryInfoView = function (container) {
  this.container = container;
};

CountryInfoView.prototype.bindEvents = function () {
  PubSub.subscribe('Countries:selected-country-ready', (evt) => {
    const countryData = evt.detail;
    this.render(countryData);
  });
};

CountryInfoView.prototype.render = function (country) {
  this.container.innerHTML = '';

  const countryName = this.createElement('h2', country.name);
  this.container.appendChild(countryName);
};

CountryInfoView.prototype.createElement = function (elementType, text) {
  const element = document.createElement(elementType);
  element.textContent = text;
  return element;
};

module.exports = CountryInfoView;
