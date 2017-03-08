(function(ng) {
  ng.module('Simon').controller('LeaderboardController', ['$q', '$state', '$scope', 'DataService', 'UserService', function($q, $state, $scope, DataService, UserService) {
    $('.testbtn').on('click', function() {
      let newArr = UserService.getArr();
      console.log(newArr);
    });

  }]);
})(angular);
