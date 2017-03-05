(function(ng) {
  ng.module('Simon', ['ui.router', 'templates']).config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('ParentState', {
      url: '/',
      abstract: true,
      template: '<ui-view></ui-view>'
    }).state('ParentState.profile', {
      url: '',
      // controller: 'ProfileController as profileCtrl',
      templateUrl: 'profile.html'
    }).state('ParentState.game', {
      url: 'game',
      controller: 'GameController as gameCtrl',
      templateUrl: 'game.html'
    }).state('ParentState.leaderboard', {
      url: 'leaderboard',
      // controller: 'GameController as gameCtrl',
      templateUrl: 'leaderboard.html'
    });
  }]);
})(angular);
