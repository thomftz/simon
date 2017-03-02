(function(ng, currentUser) {
  ng.module('Simon').controller('ProfileController', function($scope, $q, DataService) {
    console.log(currentUser.image);

    $scope.userName = currentUser;
    $scope.signedIn = false;
    if (currentUser) {
      $scope.signedIn = true;

    }
  });


})(angular, window.currentUser);
