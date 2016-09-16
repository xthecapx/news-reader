(function() {
  'use strict';

  angular
    .module('newsReader')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
