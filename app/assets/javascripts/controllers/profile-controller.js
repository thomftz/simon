(function(ng, currentUser) {
  ng.module('Simon').controller('ProfileController', function() {

    if (currentUser) {
      console.log('in');
    }

  });

})(angular, window.currentUser);
