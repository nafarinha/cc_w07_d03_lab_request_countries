const PubSub = require('../helpers/pub_sub.js');

const CountryView = function (container) {
  this.container = container;
}

CountryView.prototype.bindEvents = function () {
  PubSub.subscribe('Countries:countries-loaded', (evt) => {

    const allCountries = evt.detail;
    this.populate(allCountries);
  });

  this.container.addEventListener('change', (evt) => {
    const selectedIndex = evt.target.value;
    PubSub.publish('CountryView:change', selectedIndex);
  })

};


CountryView.prototype.populate = function (countries) {
  countries.forEach( (country, index) => {
    const option = document.createElement('option');
    option.textContent = country.name;
    option.value = index;
    this.container.appendChild(option);
  });
};

module.exports = CountryView;
