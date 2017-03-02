(function(ng) {
  ng.module('Simon').controller('LeaderboardController', function($q, $state, $scope, DataService) {
    this.users = [];
    // this.points = this.users.scores;
    let btn = document.querySelector('.testbtn');
    btn.addEventListener('click', function() {});

    $q.when(DataService.get("http://localhost:3000/users.json")).then((response) => {
      this.users = response.data;
      console.log(response);
    }).catch((error) => {
      console.log(error);
    });
  });
})(angular);
