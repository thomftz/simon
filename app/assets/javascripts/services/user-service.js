(function(ng, currentUser) {
  ng.module('Simon').service('UserService', ['$q', '$state', 'DataService', function($q, $state, DataService) {

    this.users = [];

    function getUsers(usersArr) {
      // console.log(usersArr);
      return usersArr;
    }

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
    // }

    let btn = document.querySelector('.testbtn');
    btn.addEventListener('click', function() {});

    $q.when(DataService.get("/users.json")).then((response) => {
      let usersArr = response.data;
      getUsers(usersArr);
      console.log(response.data);
    }).catch((error) => {
      console.log(error);
    });

    return {
      getUsers: getUsers
    };

  }]);
})(angular, window.currentUser);
