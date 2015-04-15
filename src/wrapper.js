(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exoskeleton', 'lodash'], function(Backbone, _) {
      return factory(Backbone, _);
    });
  }
  else if (typeof exports !== 'undefined') {
    var Backbone = require('exoskeleton');
    var _ = require('lodash');
    module.exports = factory(Backbone, _);
  }
  else {
    factory(root.Backbone, root._);
  }
}(this, function(Backbone, _) {
  'use strict';

  // @include backbone.radio.js

  return Radio;
}));
