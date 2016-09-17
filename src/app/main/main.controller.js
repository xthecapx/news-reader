(function() {
  'use strict';

  angular
    .module('newsReader')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, $scope, API_ENDPOINT, NEWS_DATA, httpService) {
    var vm = this;

    vm.classAnimation = "";
    vm.creationDate = 1474042576264;
    vm.selectedTitle = "";
    vm.loading = true;

    httpService
      .getData(API_ENDPOINT.host + NEWS_DATA.path, null)
      .success(function(response) {
        vm.newsData = response;
        $timeout(function() { // Emulate delay for fetching data
          vm.loading = false;
          vm.classAnimation = 'go-up';
        }, 2000);
      });

    vm.toggleGroup = function(group, index) {
      var $el = $(".card-" + index).next(".card-content");
      if (vm.isGroupShown(group)) {
        vm.shownGroup = null;
        vm.selectedTitle = "";
        $el.removeClass("go-down");
      } else {
        vm.shownGroup = group;
        vm.selectedTitle = group.title;
        $el.addClass("go-down");
      }
    };

    vm.isGroupShown = function(group) {
      return vm.shownGroup === group;
    };

    vm.showNews = function() {
      angular.forEach($(".card-title"), function(card, key) {
        $(card).toggleClass("go-right");
      });
      vm.shownGroup = null;
      vm.selectedTitle = "";
    }
  }
})();
