(function() {
  'use strict';

  angular
    .module('newsReader', ['ngAnimate', 'ngSanitize', 'ngMessages', 'ngAria', 'ui.router', 'ngMaterial'])
    .filter('capitalize', function() { return function(input) {
      return (input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
      }
    });

})();
