(function() {
  'use strict';

  angular
    .module('newsReader')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, $http, webDevTec, toastr, httpService) {
    var vm = this;

    //vm.awesomeThings = [];
    //vm.classAnimation = '';
    vm.creationDate = 1474042576264;
    vm.selectedTitle = "";
    //vm.showToastr = showToastr;

    httpService
      .getData("app/data/news_mock.json", null)
      .success(function(response) {
        //$scope.afinidades = response.data;
        //$scope.loading = false;
        vm.newsData = response;
      });

    //activate();


    vm.toggleGroup = function(group) {
      if (vm.isGroupShown(group)) {
        vm.shownGroup = null;
        vm.selectedTitle = "";
        
      } else {
        vm.shownGroup = group;
        vm.selectedTitle = group.title;
        
      }
    };

    vm.isGroupShown = function(group) {
      return vm.shownGroup === group;
    };

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
  }
})();
