// (function(ng) {
//   ng.module('Simon', ['ui.router', 'templates']).config(function($routeProvider, $locationProvider) {
//
//     $routeProvider
//       .when('/login', {
//         templateUrl: 'login.html'
//       }).when('/profile', {
//         templateUrl: 'profile.html'
//       }).when('/game', {
//         templateUrl: 'game.html'
//       }).when('/leaderboard', {
//         templateUrl: 'leaderboard.html'
//       });
//     $locationProvider.html5Mode(true);
//   });
// })(angular);



// (function(ng) {
//   ng.module('Simon', ['templates']).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
//
//     $routeProvider
//       .when('/login', {
//         templateUrl: 'login.html'
//       }).when('/profile', {
//         templateUrl: 'profile.html'
//       }).when('/game', {
//         templateUrl: 'game.html'
//       }).when('/leaderboard', {
//         templateUrl: 'leaderboard.html'
//       });
//     if (window.history && window.history.pushState) {
//       $locationProvider.html5Mode({
//         enabled: true,
//         requireBase: false
//       });
//     }
//   }]);
// })(angular);
