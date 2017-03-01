(function(ng, currentUser) {

    ng.module('Simon').controller('ProfileController', ['$scope', '$interpolate', function($scope, $interpolate) {

        if (currentUser) {

            $scope.userName = currentUser;




        }
    }]);


})(angular, window.currentUser);
