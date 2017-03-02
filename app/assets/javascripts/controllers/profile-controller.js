(function(ng, currentUser) {

  ng.module('Simon').controller('ProfileController', function($scope, $q, DataService) {

    $scope.userName = currentUser;
    $scope.signedIn = false;
    if (currentUser) {
      $scope.signedIn = true;

    }
  });


})(angular, window.currentUser);
