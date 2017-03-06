(function(ng, currentUser) {
  ng.module('Simon').service('DataService', ['$http', function($http) {
    function getUsers(url) {
      return $http({
        method: 'GET',
        url: url
      });
    }

    function postScores(points) {
      return $http({
        method: 'POST',
        url: `/scores/${currentUser.id}.json`,
        data: {
          scores: {
            points: points
          }
        }
      });
    }

    function patchScore(points) {
      return $http({
        method: 'PATCH',
        url: `/scores/${currentUser.id}`,
        data: {
          scores: {
            points: points
          }
        }
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
        url: `/users/${currentUser.id}.json`,
      });
    }

    return {
      get: getUsers,
      post: postScores,
      patchScore: patchScore,
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
