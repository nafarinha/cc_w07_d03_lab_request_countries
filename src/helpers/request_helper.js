const RequestHelper = function (url) {
  this.url = url;
};

RequestHelper.prototype.get = function(onComplete) {
  const xhr = XMLHttpRequest();
  xhr.open('GET', this.url);
  xhr.setRequestHeader('Accept', 'application/javascript');

  xhr.addEventListener('load', () => {
    if (xhr.status !== 200) {
      return;
    }
    const jsonString = xhr.responseText;
    const data = JSON.parse(jsonString);

    console.log(data);

    onComplete(data);
  });

  xhr.send();
}

module.exports = RequestHelper
