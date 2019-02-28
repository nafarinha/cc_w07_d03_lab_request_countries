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

  const heading = this.createHeading(country);
  const img = this.createImage(country);
  const regionHeading = this.createRegionHeading();
  const region = this.createRegion(country);
  const languagesHeading = this.createLanguagesHeading();
  const languages = this.createLanguagesList(country);

  this.container.appendChild(heading);
  this.container.appendChild(img);
  this.container.appendChild(regionHeading);
  this.container.appendChild(region);
  this.container.appendChild(languagesHeading);
  this.container.appendChild(languages);

};



CountryInfoView.prototype.createHeading = function(country) {
  const heading = document.createElement('h2');
  heading.textContent = country.name;
  return heading;
};

CountryInfoView.prototype.createImage = function(country) {
  const img = document.createElement('img');
  img.classList.add('flag-image');
  img.src = country.flag;
  return img;
};

CountryInfoView.prototype.createRegionHeading = function() {
  const regionHeading = document.createElement('h3');
  regionHeading.textContent = "Region:";
  return regionHeading;
};

CountryInfoView.prototype.createRegion = function(country) {
  const region = document.createElement('p');
  region.textContent = country.region;
  return region;
};

CountryInfoView.prototype.createLanguagesHeading = function() {
  const languagesHeading = document.createElement('h3');
  languagesHeading.textContent = "Languages:";
  return languagesHeading;
};

CountryInfoView.prototype.createLanguagesList = function(country) {
    const languagesList = document.createElement('ul');

    const countryLanguages = country.languages;
    let liLanguage = null;

    countryLanguages.forEach( (language) => {
      liLanguage = this.createLi(language.name, languagesList)
    });

    return languagesList
};

CountryInfoView.prototype.createLi = function(textContent, ul) {
  const li = document.createElement('li');
  li.textContent = textContent;
  ul.appendChild(li);
}

CountryInfoView.prototype.createElement = function (elementType, text) {
  const element = document.createElement(elementType);
  element.textContent = text;
  return element;
};

module.exports = CountryInfoView;
