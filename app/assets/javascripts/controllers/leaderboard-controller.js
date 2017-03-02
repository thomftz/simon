(function(ng) {
  ng.module('Simon').controller('LeaderboardController', function($q, $state, $scope, DataService) {
    this.users = [];
    // this.points = this.users.scores;



    this.getTotalScore = function() {
      for (var i = 0; i < this.users.length; i++) {
        let score = this.users[i].scores;
        for (var i = 0; i < score.length; i++) {
          console.log(score[i].points);
        }

        // let lastLogin = date
      }
      // console.log(this.users);
      return this.users;
    };

    let btn = document.querySelector('.testbtn');
    btn.addEventListener('click', function() {});

    $q.when(DataService.get("http://localhost:3000/users.json")).then((response) => {
      this.users = response.data;
      this.getTotalScore();
      // console.log(response);
    }).catch((error) => {
      console.log(error);
    });
  });
})(angular);
