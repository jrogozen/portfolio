app.config(['$stateProvider', function($stateProvider) {
  $stateProvider
    .state('main', {
      url: '/',
      abstract: true,
      templateUrl: 'client/app/main/main.html',
      controller: 'mainCtrl'
    })
    .state('main.portfolio-list', {
      url: "",
      templateUrl: 'client/app/main/main.portfolio.html',
      controller: 'mainCtrl'
    })
    ;
}]);