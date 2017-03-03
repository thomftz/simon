(function(ng, currentUser) {
  ng.module('Simon').service('DataService', ['$http', function($http) {
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

    function patchBio(text) {
      return $http({
        method: 'PATCH',
        url: `/users/${currentUser.id}.json`,
        data: {
          user: {
            about: text
          }
        }
      });
    }

    function deleteStuff() {
      return $http({
        method: 'DELETE',
        url: url
      });
    }

    return {
      get: getUsers,
      set: setUsers,
      delete: deleteStuff,
      patch: patchBio
    };
  }]);
})(angular, window.currentUser);

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
