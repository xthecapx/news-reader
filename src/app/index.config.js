(function() {
  'use strict';

  angular
    .module('newsReader')
    .config(config);

  /** @ngInject */
  function config($logProvider, $mdThemingProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    // toastrConfig.allowHtml = true;
    // toastrConfig.timeOut = 3000;
    // toastrConfig.positionClass = 'toast-top-right';
    // toastrConfig.preventDuplicates = true;
    // toastrConfig.progressBar = true;

    $mdThemingProvider.theme('default').primaryPalette('red');
  }

})();
