(function() {
  'use strict';

  angular
    .module('newsReader')
    .directive('cascadingCss', cascadingCss);

  /** @ngInject */
  function cascadingCss() {
    var directive = function(scope) {
      if (scope.$last){

        var setCss = {
          "vendors": [
              '-webkit-',
              '-o-',
              '-moz-',
              '-ms-',
              ''
          ],
          "time": 0.65,
          "timingFunction": "cubic-bezier(0.17, 0.89, 0.32, 1.28)",
          "toCamelCase": function(str) {
            return str.toLowerCase().replace(/(\-[a-z])/g, function($1) {
                return $1.toUpperCase().replace('-', '');
            });
          },
          "apply": function(el, prop, val) {
              this.vendors.forEach(angular.element.proxy(function(vendor) {
                  var p = this.toCamelCase(vendor + prop);

                  if(p in el.style) {
                      el.style[p] = val;
                  }
              }, this));
              el.style.transitionTimingFunction = this.timingFunction;
          }
        };
        angular.forEach(angular.element(".card-title"), function(card) {
          setCss.apply(card, 'transition', 'all ' + setCss.time + 's');
          setCss.time += 0.1;
        });
      }
    };

    return directive;
  }

})();
