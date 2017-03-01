(function(ng) {
  ng.module('Simon', ['ui.router', 'templates']).config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('ParentState', {
      url: '/',
      abstract: true,
      template: '<ui-view></ui-view>'
    }).state('ParentState.index', {
      url: '',
      controller: 'LogInController',
      templateUrl: 'login.html'
    }).state('ParentState.profile', {
      url: 'profile',
      // controller: 'ProfileController as profileCtrl',
      templateUrl: 'profile.html'
    }).state('ParentState.game', {
      url: 'game',
      // controller: 'GameController as gameCtrl',
      templateUrl: 'game.html'
    });
  });
})(angular);
