(function(ng) {
  ng.module('Simon').controller('LeaderboardController', ['$q', '$state', '$scope', 'DataService', 'UserService', function($q, $state, $scope, DataService, UserService) {
    $scope.sortType = "score";
    $scope.sortReverse = true;
    $scope.users = [];

    $scope.getUsers = function() {
      console.log($scope.users);
      $scope.users = UserService.getArr();
      return $scope.users;
    };

    $scope.getUsers();

  }]);

})(angular);
