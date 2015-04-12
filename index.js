/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-packery',

  included: function(app) {
    this._super.included(app);

    app.import({
      development: app.bowerDirectory + '/packery/dist/packery.pkgd.js',
      production: app.bowerDirectory + '/packery/dist/packery.pkgd.min.js'
    });

    app.import({
      development: app.bowerDirectory + '/imagesloaded/imagesloaded.pkgd.js',
      production: app.bowerDirectory + '/imagesloaded/imagesloaded.pkgd.min.js'
    });
  }
};
