(function() {
   'use strict';

   angular
     .module('newsReader')
     .factory('httpService', httpService);

   /** @ngInject */
   function httpService($http) {
     var service = {
       getData: getData,
       postData: postData
     };

     return service;

     function getData(uri, parameters) {
       return $http({
         url:  uri,
         method: "GET",
         params: parameters
       });
     }

     function postData(uri, parameters) {
       return $http({
         url:  uri,
         method: "POST",
         params: parameters
       });
     }
   }
 })();
