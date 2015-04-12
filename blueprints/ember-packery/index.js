module.exports = {
  name: 'ember-packery',
  description: 'Add ember-packery bower dependencies to app.',

  normalizeEntityName: function() {
  },

  afterInstall: function() {
    return this.addBowerPackagesToProject([
      { name: 'packery' },
      { name: 'imagesloaded' }
    ]);
  }
};