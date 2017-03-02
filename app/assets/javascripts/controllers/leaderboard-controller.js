(function(ng) {
  ng.module('Simon').controller('LeaderboardController', function($q, DataService) {
    $q.when(DataService.get("https://localhost:3000/users.json")).then((response) => {
      this.users = response.data;
      console.log(response);
    }).catch((error) => {
      console.log(error);
    });
  });
})(angular);
