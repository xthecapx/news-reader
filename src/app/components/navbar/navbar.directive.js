(function() {
  'use strict';

  angular
    .module('newsReader')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          creationDate: '=',
          showTitle: '@'
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController($scope) {
      var vm = this;

      // "vm.creationDate" is available by directive option "bindToController: true"
      vm.title = vm.showTitle;
      $scope.$watch('[vm.showTitle]', function (newValue, oldValue) {
        if (newValue[0] !== oldValue[0]) {
              vm.title = vm.showTitle;
            }
      }, true);
    }
  }

})();
