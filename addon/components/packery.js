/* global imagesLoaded */
import Ember from 'ember';

var getOptions = function (keys) {
  var properties = this.getProperties(keys);

  Object.keys(properties).forEach(function (key) {
    if (properties[key] === "null") {
      properties[key] = null;
    }

    if (properties[key] === undefined) {
      delete properties[key];
    }
  });

  return properties;
};

export default Ember.Component.extend({
  classNames: ['packery'],

  options: null,
  items: null,

  packeryInitialized: false,

  initializePackery: Ember.on('didInsertElement', function () {
    this.set('options', getOptions.call(this, [
      'itemSelector',
      'columnWidth',
      'rowHeight',
      'gutter',
      'percentPosition',
      'stamp',
      'isHorizontal',
      'isOriginLeft',
      'isOriginTop',
      'transitionDuration',
      'containerStyle',
      'isResizeBound',
      'isInitLayout'
    ]));

    this.layoutPackery();
  }),

  layoutPackery: Ember.observer('items.@each', function () {
    var _this = this;

    imagesLoaded(this.$(), function () {
      if (_this.get('packeryInitialized')) {
        _this.$().packery('destroy');
      }

      _this.$().packery(_this.get('options'));
      _this.set('packeryInitialized', true);
    });
  })
});
