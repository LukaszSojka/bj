var phonecatApp = angular.module('phonecatApp', [
  'ngRoute',
  'Controllers1'
]).run(['$anchorScroll', function($anchorScroll) {
  $anchorScroll.yOffset = 145;   // always scroll by 50 extra pixels
}])

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'partials/blackjack.html',
        controller: 'blackjack',
		renderOnFirstLoad: false
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);
  