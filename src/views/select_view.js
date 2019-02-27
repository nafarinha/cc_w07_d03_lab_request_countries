const PubSub = require('../helpers/pub_sub.js');

const SelectView = function (container) {
  this.container = container;
}

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Countries:countries-loaded', (evt) => {

    const allCountries = evt.detail;
    this.populate(allCountries);
  });

  this.container.addEventListener('change', (evt) => {
    const selectedIndex = evt.target.value;
    PubSub.publish('SelectView:change', selectedIndex);
  })

};


SelectView.prototype.populate = function (countries) {
  countries.forEach( (country, index) => {
    const option = document.createElement('option');
    option.textContent = country.name;
    option.value = index;
    this.container.appendChild(option);
  });
};

module.exports = SelectView;
