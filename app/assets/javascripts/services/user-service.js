(function(ng, currentUser) {
  ng.module('Simon').service('UserService', ['$q', '$state', 'DataService', function($q, $state, DataService) {
    function getArr(arr) {
      console.log('innny');
      return arr;
    }




    this.users = [];
    this.rankSet = function(array) {
      for (var i = 0; i < array.length; i++) {
        if (array[i].score >= 500 && array[i].score < 1000) {
          this.users[i].rank = 'snowcone';

        } else if (array[i].score >= 1000 && array[i].score < 2000) {
          this.users[i].rank = 'popcorn';

        } else if (array[i].score >= 2000 && array[i].score < 3000) {
          this.users[i].rank = 'liquidsnake';

        } else if (array[i].score >= 3000 && array[i].score < 4000) {
          this.users[i].rank = 'revolver ocelot';

        } else if (array[i].score >= 4000 && array[i].score < 5000) {
          this.users[i].rank = "probably dan's rank";

        } else if (array[i].score >= 5000 && array[i].score < 6000) {
          this.users[i].rank = "thunderslice";

        } else if (array[i].score >= 6000 && array[i].score < 7000) {
          this.users[i].rank = "carter status";
        }
        getArr(array);
      }
    };

    $q.when(DataService.get("/users.json")).then((response) => {
      console.log(response.data);
      let users = response.data;
      let arr = [];
      for (var prop in users) {
        let tempObj = {
          name: prop,
          score: users[prop],
          rank: 'acorn'
        };
        console.log(tempObj);
        arr.push(tempObj);
      }
      this.users = arr;
      this.rankSet(arr);
      console.log(this.users);
      // console.log(arr);
    }).catch((error) => {
      console.log(error);
    });
    return {
      getArr: getArr
    };
  }]);
})(angular);
