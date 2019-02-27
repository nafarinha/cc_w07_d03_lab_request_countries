const PubSub = require('../helpers/pub_sub.js');

const CountryView = function (container) {
  this.container = container;
}

CountryView.prototype.bindEvents = function () {
  PubSub.subscribe('Countries:countries-loaded', (evt) => {
    this.render(evt.detail);
  });
}

CountryView.prototype.render = function (countries) {
  const p = document.createElement('p');
  p.textContent = countries;
  this.container.appendChild(p);
}


module.exports = CountryView;
