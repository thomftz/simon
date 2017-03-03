(function(ng, currentUser) {
  ng.module('Simon').service('UserService', ['$q', '$state', 'DataService', function($q, $state, DataService) {

    this.users = [];
    this.pointsArr = [];

    // this.getUsers = function() {
    // };
    function getUsers() {

      return this.users;
    }

    this.getTotalScore = function() {
      for (let i = 0; i < this.users.length; i++) {
        let score = this.users[i].scores;
        for (let j = 0; j < score.length; j++) {
          console.log(score[j].points);
          this.pointsArr.push(score[j].points);
        }
      }
      let totalPoints = this.pointsArr.reduce((a, b) => a + b, 0);
      this.points = totalPoints;
      console.log(this.points);
    };

    let btn = document.querySelector('.testbtn');
    btn.addEventListener('click', function() {});

    $q.when(DataService.get("/users.json")).then((response) => {
      this.users = response.data;
      this.getTotalScore();
      // console.log(response);
    }).catch((error) => {
      console.log(error);
    });

    return {
      getUsers: getUsers
    };

  }]);
})(angular, window.currentUser);
