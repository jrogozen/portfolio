app.config(['$stateProvider', function($stateProvider) {
  $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'client/app/main/main.html',
      controller: 'mainCtrl'
    })
    ;
}]);