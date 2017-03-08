(function(ng) {
  ng.module('Simon').controller('LeaderboardController', ['$q', '$state', '$scope', 'DataService', function($q, $state, $scope, DataService) {
    // $scope.users = [];
    // $scope.shit = function() {
    //   $scope.users = UserService.getArr();
    //   console.log($scope.users);
    // };
    //
    // $scope.shit();

    $scope.users = [];
    $scope.rankSet = function(array) {
      for (var i = 0; i < array.length; i++) {
        if (array[i].score >= 500 && array[i].score < 1000) {
          $scope.users[i].rank = 'snowcone';

        } else if (array[i].score >= 1000 && array[i].score < 2000) {
          $scope.users[i].rank = 'popcorn';

        } else if (array[i].score >= 2000 && array[i].score < 3000) {
          $scope.users[i].rank = 'liquidsnake';

        } else if (array[i].score >= 3000 && array[i].score < 4000) {
          $scope.users[i].rank = 'revolver ocelot';

        } else if (array[i].score >= 4000 && array[i].score < 5000) {
          $scope.users[i].rank = "probably dan's rank";

        } else if (array[i].score >= 5000 && array[i].score < 6000) {
          $scope.users[i].rank = "thunderslice";

        } else if (array[i].score >= 6000 && array[i].score < 7000) {
          $scope.users[i].rank = "carter status";
        } else if (array[i].score >= 7000 && array[i].score < 8000) {
          $scope.users[i].rank = "Val cheated";
        }
      }
    };

    $q.when(DataService.get("/users.json")).then((response) => {
      let users = response.data;
      let arr = [];
      for (var prop in users) {
        let tempObj = {
          name: prop,
          score: users[prop],
          rank: 'acorn'
        };
        arr.push(tempObj);
      }
      $scope.users = arr;
      $scope.rankSet(arr);
      // console.log(response.data);
    }).catch((error) => {
      console.log(error);
    });
  }]);
})(angular);
