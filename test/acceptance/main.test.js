var assert = require('assert');

describe('Acceptance Test', function() {
  it('Should be a text saying hello', function() {
    this.timeout(10000);
    const webdriverio = require('webdriverio');
    const options = {
      desiredCapabilities: {
        browserName: 'firefox'
      }
    };

    return webdriverio
    .remote(options)
    .init()
    .url('http://localhost:3000')
    .getText('#text')
    .then(function(title) {
      assert(title === 'Hello World');
    })
    .end();
  });
});
