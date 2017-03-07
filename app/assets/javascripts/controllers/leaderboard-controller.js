(function(ng) {
  ng.module('Simon').controller('LeaderboardController', ['$q', '$state', '$scope', 'DataService', 'UserService', function($q, $state, $scope, DataService, UserService) {
    $scope.users = [];

    $q.when(DataService.get("/users.json")).then((response) => {
      let users = response.data;
      let arr = [];
      for (var prop in users) {
        let tempObj = {
          name: prop,
          score: users[prop]
        };
        console.log(tempObj);
        arr.push(tempObj);
      }
      $scope.users = arr;
      console.log($scope.users);

      // console.log(arr);
    }).catch((error) => {
      console.log(error);
    });

  }]);
})(angular);
