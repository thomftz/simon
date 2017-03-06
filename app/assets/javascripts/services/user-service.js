(function(ng, currentUser) {
  ng.module('Simon').service('UserService', ['$q', '$state', 'DataService', function($q, $state, DataService) {

    // this.users = [];

    function updateScore(num) {
      $q.when(DataService.patchScore(num)).then((response) => {

        console.log(response.data);
      }).catch((error) => {
        console.log(error);
      });
    }

    function getTotalScore(userArr) {
      let pointsArr = [];
      userArr.forEach(function(user) {
        // console.log(user.scores);
        let scores = user.scores;

        scores.forEach(function(score) {
          pointsArr.push(score.points);
          // let points = new Array(score.points);
          // console.log(pointsArr);
        });
        // for (let i = 0; i < user.scores.length; i++) {
        //   let arr = new Array(user.scores[i].points);
        //   console.log(arr);
        //   // console.log(user.scores[i]);
        // }
      });
      // for (let i = 0; i < userArr.length; i++) {
      //   let score = userArr[i].scores;
      //   console.log(score);
      //   score.forEach(function(i) {
      //     let arr = new Array(i);
      //     console.log(arr);
      //   });


      //     for (let j = 0; j < score.length; j++) {
      //       // console.log(`score[j].points ${score[j].points}`);
      //       pointsArr.push(score[j].points);
      //     }
      //   }
      //   let totalPoints = pointsArr.reduce((a, b) => a + b, 0);
      //   getUsers(totalPoints);
      //   // console.log(totalPoints);
      // }

      // function getTotalScore(userArr) {
      //   let pointsArr = [];
      //   console.log(`pointsArr ${pointsArr}`);
      //   for (let i = 0; i < userArr.length; i++) {
      //     let score = userArr[i].scores;
      //     console.log(`userArr[i] ${userArr[i]}`);
      //     for (let j = 0; j < score.length; j++) {
      //       console.log(`score[j].points ${score[j].points}`);
      //       pointsArr.push(score[j].points);
      //     }
      //   }
      //   let totalPoints = pointsArr.reduce((a, b) => a + b, 0);
      //   getUsers(totalPoints);
      //   console.log(totalPoints);
    }

    let btn = document.querySelector('.testbtn');
    btn.addEventListener('click', function() {});

    $q.when(DataService.get("/users.json")).then((response) => {
      let userArr = response.data;
      getTotalScore(userArr);
      // console.log(response);
    }).catch((error) => {
      console.log(error);
    });

    return {
      updateScore: updateScore
    };

  }]);
})(angular, window.currentUser);
