(function(ng) {
  ng.module('Simon').controller('GameController', ['$scope', '$q', 'DataService', function($scope, $q, DataService) {

    let patternArray = [];
    let userArr = [];
    let num = 0;

    $scope.score = 0;
    $scope.status = '';
    $scope.round = 1;
    $scope.betweenRounds = false;
    $scope.lose = 'you lose';
    $scope.next = 'next';

    $('.slice').on('mousedown mouseup', function() {
      $(this).toggleClass('select');
    });

    $(window).on('keydown keyup', function() {
      if (event.which === 73) {
        $(`.slice[data-id=1]`).toggleClass('select');
        $('.audio1').get(0).play();
      } else if (event.which === 79) {
        $(`.slice[data-id=2]`).toggleClass('select');
        $('.audio2').get(0).play();
      } else if (event.which === 75) {
        $(`.slice[data-id=3]`).toggleClass('select');
        $('.audio3').get(0).play();
      } else if (event.which === 76) {
        $(`.slice[data-id=4]`).toggleClass('select');
        $('.audio4').get(0).play();

      }
    });

    $scope.start = function() {
      $scope.status = 'ready!';
      $scope.gamePattern();
    };

    $scope.gamePattern = function() {
      while (patternArray.length < 3 + $scope.round) {
        let rand = Math.floor(Math.random() * (4) + 1);
        patternArray.push(rand);
      }
      console.log(patternArray);
      setTimeout(function() {
        $scope.lightGame();
      }, 1000);
    };

    $scope.lightGame = function() {
      for (let i = 0; i < patternArray.length; i++) {
        setTimeout(function(i) {
          $(`.audio${patternArray[i]}`).get(0).cloneNode().play();
          setTimeout(function() {
            $(`.slice[data-id=${patternArray[i]}]`).toggleClass('select');
          }, 1000);
          $(`.slice[data-id=${patternArray[i]}]`).toggleClass('select');
          num++;
          if (num == patternArray.length) {
            setTimeout(function() {
              $scope.startGame();
              if ($scope.round === 1) {
                $scope.bindEvents();
              }
            }, 1500);
          }
        }, i * 1500, i);
      }
    };

    $scope.startGame = () => {
      console.log('start game');
      $scope.$apply(function() {
        $scope.status = 'go!';
      });
    };

    $scope.bindEvents = function() {
      $('.slice').on('click', function() {
        console.log($(this).data('id'));
        let number = $(this).data('id');
        $(`.audio${number}`).get(0).play();
        userArr.push($(this).data('id'));
        $scope.checkPattern();
      });

      $(window).keydown(function() {

        if (event.which === 73) {
          // console.log('in');
          userArr.push(1);
          $scope.checkPattern();
        } else if (event.which === 79) {
          userArr.push(2);
          $scope.checkPattern();
        } else if (event.which === 75) {
          userArr.push(3);
          $scope.checkPattern();
        } else if (event.which === 76) {
          userArr.push(4);
          $scope.checkPattern();
        }
      });
    };

    $scope.checkPattern = function() {
      for (var i = 0; i < userArr.length; i++) {
        if (userArr[i]) {
          if (userArr[i] != patternArray[i]) {
            $scope.youLose();
          } else if (userArr.length === patternArray.length) {
            $scope.youWin();
            break;
          }
        }
      }
    };

    $scope.youLose = function() {
      $('.audio5').get(0).play();

      $scope.$apply(function() {
        $scope.betweenRounds = true;
        $scope.next = 'try again';

      });
      console.log('you lost');
    };

    $scope.youWin = function() {
      $scope.$apply(function() {
        $scope.round++;
        $scope.lose = 'nice job!';
        $scope.betweenRounds = true;
        $scope.next = 'next';
        $scope.score += 25;
      });
      let score = $scope.score;
      postScore(score);
      // $scope.postScore(score);
      console.log(score);
      console.log('you win');
    };

    $scope.resetRound = function() {
      $scope.status = '';
      patternArray = [];
      userArr = [];
      $scope.betweenRounds = false;
      console.log('reset');
    };

    function postScore(points) {

      // $scope.postScore = function(points) {
      console.log(points);
      $q.when(DataService.post(points)).then((response) => {
        // $scope.score = response.data.about;
        console.log(response.data);
      }).catch((error) => {
        console.log(error);
      });
    }

  }]);
})(angular);
