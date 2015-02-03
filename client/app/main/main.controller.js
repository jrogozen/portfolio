app.controller('mainCtrl', ['$scope', '$stateParams', function($scope, $stateParams) {
  var portfolio = [
    {
      title: "Tiny Chat",
      keywords: "angular, gulp, protractor",
      img: "static/images/puppy1.jpg",
      url: "https://github.com/jrogozen/aero"
    },
    {
      title: "Drinks",
      keywords: "angular, gulp, protractor, jasmine, mocha, express",
      img: "static/images/puppy2.jpg",
      url: "https://github.com/jrogozen/drinks"
    },
    {
      title: "E-Commerce",
      keywords: "angular",
      img: "static/images/puppy3.jpg",
      url: "https://github.com/jrogozen/practice"
    },
    {
      title: "Loltrackr",
      keywords: "rails, angular, youtube api, twitch api, riot games api",
      img: "static/images/puppy4.jpg",
      url: "https://github.com/jrogozen/loltrackr"
    },
    {
      title: "Papalote",
      keywords: "rails, node, angular, socket.io",
      img: "static/images/puppy5.jpg",
      url: "https://github.com/jrogozen/papalote"
    },
    {
      title: "Metube",
      keywords: "jquery, rails",
      img: "static/images/puppy6.jpg",
      url: "https://github.com/jrogozen/metube"
    },
    {
      title: "Cuppr",
      keywords: "Angular, Firebase, AngularFire",
      img: "static/images/puppy7.jpg",
      url: "https://github.com/pdadhaniya/cupper"
    }
  ];

  $scope.portfolio = portfolio;
}]);