(function(ng, currentUser) {

  ng.module('Simon').controller('ProfileController', ['$scope', '$q', 'DataService', function($scope, $q, DataService) {

    $scope.userName = currentUser;
    $scope.signedIn = false;
    if (currentUser) {
      $scope.signedIn = true;

    }
  }]);


})(angular, window.currentUser);
