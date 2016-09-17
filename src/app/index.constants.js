(function() {
  'use strict';

  angular
    .module('newsReader')
    .constant('API_ENDPOINT', {
      host: "" // in case you want diferent domain
    })
    .constant('NEWS_DATA', {
      path: "app/data/news_mock.json" //Change if needed
      // url: "/get/news" //Example
    });

})();
