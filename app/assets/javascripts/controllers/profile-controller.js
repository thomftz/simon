(function(ng, currentUser) {

  ng.module('Simon').controller('ProfileController', ['$scope', '$q', 'DataService', function($scope, $q, DataService) {
    // console.log('profile');

    $scope.bio = null;
    $scope.userName = currentUser;
    $scope.signedIn = false;

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
      $q.when(DataService.delete()).then((response) => {
        // console.log(response);
      }).catch((error) => {
        console.log(error);
      });
    };

  }]);


})(angular, window.currentUser);
