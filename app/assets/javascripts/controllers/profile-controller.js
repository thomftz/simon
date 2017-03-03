(function(ng, currentUser) {

  ng.module('Simon').controller('ProfileController', ['$scope', '$q', 'DataService', function($scope, $q, DataService) {
    document.querySelector('.testbtn').addEventListener('click', function() {
      $scope.deleteUser();
      // console.log('in');
    });
    // console.log(currentUser.id);
    $scope.bio = null;
    $scope.userName = currentUser;
    $scope.signedIn = false;
    // document.querySelector('.delete-bio').addEventListener('click', function() {
    //   $scope.deleteBio();
    // });
    if (currentUser) {
      $scope.signedIn = true;
    }
    $q.when(DataService.get(`/users/${currentUser.id}.json`)).then((response) => {
      // console.log(response.data[0].about);
      $scope.bio = response.data[0].about;

      // console.log($scope.bio);

    }).catch((error) => {
      console.log(error);
    });


    $scope.patchBioText = function(text) {
      $q.when(DataService.patch(text)).then((response) => {
        // console.log(response.data);
        $scope.bio = response.data.about;
      }).catch((error) => {
        console.log(error);
      });
    };
    $scope.deleteUser = function() {
      $q.when(DataService.delete()).then((response) => {
        // $scope.bio = response.data.about;
        console.log(response);
      }).catch((error) => {
        console.log(error);
      });
    };

  }]);


})(angular, window.currentUser);
