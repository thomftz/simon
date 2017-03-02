(function(ng, currentUser) {

  ng.module('Simon').controller('ProfileController', ['$scope', '$q', 'DataService', function($scope, $q, DataService) {
    // console.log(currentUser.id);
    $scope.bio = null;
    $scope.userName = currentUser;
    $scope.signedIn = false;
    if (currentUser) {
      $scope.signedIn = true;
    }
    $scope.getBioText = function(text) {
      $scope.bio = text;
      $q.when(DataService.patch("bio", text)).then((response) => {
        console.log(response.data);
      }).catch((error) => {
        console.log(error);
      });
    };
  }]);


})(angular, window.currentUser);
