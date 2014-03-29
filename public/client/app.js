var app = angular.module('myApp', []);

app.service('Links', function($http) {
  return {
    getLinks: function(){
      var promise = $http({
        method: 'GET',
        url: '/links'
      }).then(function(data){
        return data;
      });
      return promise;
    }
  };
});

app.run(function($rootScope) {
  $rootScope.name = 'someone else';
});

app.controller('linktroller', function($scope, Links) {
  Links.getLinks().then(function(data){
    $scope.links = data.data;
  });
});




