angular.module('newsReader')
.service('httpService', ['$http', function($http) {

  this.getData = function(uri, parameters) {
    //$http.defaults.headers.common.Authorization = 'Bearer ' + user.getUser().token;
    return $http({
      url:  uri,
      method: "GET",
      params: parameters
    });
  };

  this.postData = function(uri, parameters) {
    return $http({
      url:  uri,
      method: "POST",
      params: parameters
    });
  };
}]);
