(function(ng, currentUser) {

  ng.module('Simon').controller('ProfileController', function($scope, $q, DataService) {

    $scope.userName = currentUser;

  });


})(angular, window.currentUser);
