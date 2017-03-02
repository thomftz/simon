(function(ng) {
  ng.module('Simon').service('DataService', function($http) {
    function getUsers(url) {
      return $http({
        method: 'GET',
        url: url
      });
    }

    function setUsers() {
      return $http({
        method: 'PUT',
        url: url
      });
    }

    function deleteStuff() {
      return $http({
        method: 'DELETE',
        url: url
      });
    }

    return {
      getUsers: get,
      setUsers: set,
      deleteStuff: deleteThis
    };
  });
})(angular);

//
//
//
// let url = "localhost:3000/users.json";
//
//
//
// $.ajax({
//   url: url,
//   method: 'GET'
// }).then(function(response) {
//   response.results.forEach(function(result) {
//     $('<li>').html(result.question).appendTo($questions)
//   })
// }).catch(function(response) {
//   console.error(response);
// });
