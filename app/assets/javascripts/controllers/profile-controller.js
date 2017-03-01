(function(ng, currentUser) {

    ng.module('Simon').controller('ProfileController', ['$scope', '$interpolate', function($scope, $interpolate) {

        if (currentUser) {
            $scope.firstName = currentUser.name.split(' ', 1);
            $scope.userName = $scope.firstName.value;

            console.log($scope.userName);




        }
    }]);


})(angular, window.currentUser);
