(function(ng, currentUser) {
  ng.module('Simon').controller('ProfileController', ['$scope', '$q', 'DataService', 'UserService', function($scope, $q, DataService, UserService) {
    $scope.userName = null;
    $scope.image = null;
    $scope.rank = null;
    $scope.signedIn = false;

    if (currentUser) {
      $scope.signedIn = true;
    } else {
      $('.navbar').addClass('is-hidden');
    }

    $q.when(DataService.get(`/users/${currentUser.id}.json`)).then((response) => {
      $scope.bio = response.data[0].about;
      $scope.image = response.data[0].image;
      $scope.userName = response.data[0].name;
    }).catch((error) => {
      console.log(error);
    });

    $scope.patchBioText = function(text) {
      $q.when(DataService.patch(text)).then((response) => {
        $scope.bio = response.data.about;
      }).catch((error) => {
        console.log(error);
      });
    };

    $scope.toggleTextarea = function() {
      $scope.bio = null;
    };

    $scope.deleteUser = function() {
      $q.when(DataService.delete()).then((response) => {
        console.log("user deleted");
      }).catch((error) => {
        console.log(error);
      });
      $scope.signedIn = false;
      location.reload();
    };

    $scope.rankSet = function(obj) {
      if (obj.score >= 500 && obj.score < 1000) {
        obj.rank = 'snowcone';

      } else if (obj.score >= 1000 && obj.score < 2000) {
        obj.rank = 'popcorn';

      } else if (obj.score >= 2000 && obj.score < 3000) {
        obj.rank = 'liquidsnake';

      } else if (obj.score >= 3000 && obj.score < 4000) {
        obj.rank = 'revolver ocelot';

      } else if (obj.score >= 4000 && obj.score < 5000) {
        obj.rank = "probably dan's rank";

      } else if (obj.score >= 5000 && obj.score < 6000) {
        obj.rank = "thunderslice";

      } else if (obj.score >= 6000 && obj.score < 7000) {
        obj.rank = "carter status";

      } else if (obj.score >= 7000 && obj.score < 8000) {
        obj.rank = "Val cheated";

      } else if (obj.score >= 8000) {
        obj.rank = "Bryce cheated";
      }
      $scope.rank = obj.rank;
      $scope.points = obj.score;
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
        if (tempObj.name === currentUser.name) {
          $scope.rankSet(tempObj);
        }
      }
      UserService.getArr();
    }).catch((error) => {
      console.log(error);
    });

  }]);
})(angular, window.currentUser);
