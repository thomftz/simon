(function(ng) {
  ng.module('Simon').controller('LeaderboardController', ['$q', '$state', '$scope', 'DataService', 'UserService', function($q, $state, $scope, DataService, UserService) {
    $scope.users = UserService.getUsers();
    console.log($scope.users);
  }]);
})(angular);
