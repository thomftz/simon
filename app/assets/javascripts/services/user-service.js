(function(ng, currentUser) {
  ng.module('Simon').service('UserService', ['$q', '$state', 'DataService', function($q, $state, DataService) {
    let usersArr = [];

    function getArr() {
      function rankSet(array) {
        for (var i = 0; i < array.length; i++) {
          if (array[i].score >= 500 && array[i].score < 1000) {
            usersArr[i].rank = 'snowcone';

          } else if (array[i].score >= 1000 && array[i].score < 2000) {
            usersArr[i].rank = 'popcorn';

          } else if (array[i].score >= 2000 && array[i].score < 3000) {
            usersArr[i].rank = 'liquidsnake';

          } else if (array[i].score >= 3000 && array[i].score < 4000) {
            usersArr[i].rank = 'revolver ocelot';

          } else if (array[i].score >= 4000 && array[i].score < 5000) {
            usersArr[i].rank = "probably dan's rank";

          } else if (array[i].score >= 5000 && array[i].score < 6000) {
            usersArr[i].rank = "thunderslice";

          } else if (array[i].score >= 6000 && array[i].score < 7000) {
            usersArr[i].rank = "carter status";

          } else if (array[i].score >= 7000 && array[i].score < 8000) {
            usersArr[i].rank = "Val cheated";

          } else if (array[i].score >= 7000) {
            usersArr[i].rank = "carter status";

          } else if (array[i].score >= 7000 && array[i].score < 8000) {
            usersArr[i].rank = "Bryce cheated";
          }
        }
      }

      $q.when(DataService.get("/users.json")).then((response) => {
        let users = response.data;
        let arr = [];
        for (var prop in users) {
          let tempObj = {
            name: prop,
            score: users[prop],
            rank: 'acorn'
          };
          arr.push(tempObj);
        }
        usersArr = arr;
        rankSet(arr);
        console.log(usersArr);
      }).catch((error) => {
        console.log(error);
      });
      return usersArr;
    }

    return {
      getArr: getArr
    };


  }]);
})(angular);
