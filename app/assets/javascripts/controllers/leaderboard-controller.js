(function(ng) {
  ng.module('Simon').controller('LeaderboardController', ['$q', '$state', '$scope', 'DataService', 'UserService', function($q, $state, $scope, DataService, UserService) {
    // $scope.users = [];\
    $scope.sortType = "score";
    $scope.sortReverse = true;
    $scope.users = [];

    $('.testbtn').on('click', function() {
      // UserService.getArr();
      $scope.stuff();
    });

    $scope.stuff = function() {
      console.log();
      console.log($scope.users);
      $scope.users = UserService.getArr();
      return $scope.users;
    };

    $scope.stuff();
    $scope.stuff();

  }]);

})(angular);
