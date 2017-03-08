(function(ng, currentUser) {

  ng.module('Simon').controller('ProfileController', ['$scope', '$q', 'DataService', function($scope, $q, DataService) {
    $scope.userName = currentUser;

    if (currentUser) {
      $scope.signedIn = true;
    }

    if (!currentUser) { //not sure why but ng-show="signedIn" stopped working on the nav bar even though it worked on everything else?
      $('.navbar').addClass('is-hidden');
    }

    $q.when(DataService.get(`/users/${currentUser.id}.json`)).then((response) => {
      $scope.bio = response.data[0].about;
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
      location.reload();
      $q.when(DataService.delete()).then((response) => {}).catch((error) => {
        console.log(error);
      });
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
      } else if (array[i].score >= 7000 && array[i].score < 8000) {
        $scope.users[i].rank = "Val cheated";
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
    }).catch((error) => {
      console.log(error);
    });

  }]);
})(angular, window.currentUser);
