(function(ng) {
  ng.module('Simon').controller('GameController', ['$scope', '$q', function($scope, $q) {

    const centerShape = $('.centershape');
    const between = $('.between');
    let start = $('.start-game');
    let patternArray = [];
    let userArr = [];
    let num = 0;
    let points = 0;
    let score = 0;
    let doodoo = 'katie';
    $scope.status = '';
    $scope.round = 1;
    $scope.betweenRounds = false;
    $scope.lose = 'you lose';
    $scope.next = 'next';

    $('.slice').on('mousedown mouseup', function() {
      $(this).toggleClass('select');
    });

    $scope.start = function() {
      $scope.status = 'ready!';
      $scope.gamePattern();
    };

    $scope.gamePattern = function() {
      while (patternArray.length < 4) {
        let rand = Math.floor(Math.random() * 4);
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
          setTimeout(function() {
            $(`.slice[data-id=${patternArray[i]}]`).toggleClass('select');
          }, 1000);
          $(`.slice[data-id=${patternArray[i]}]`).toggleClass('select');
          num++;
          if (num == patternArray.length) {
            setTimeout(function() {
              $scope.startGame();
              bindEvents();
              $scope.status = 'go!';

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

    function bindEvents() {
      $('.slice').on('click', function() {
        console.log($(this).data('id'));
        userArr.push($(this).data('id'));
        console.log(userArr);
        $scope.checkPattern();
      });
    }

    $scope.checkPattern = function() {
      if (userArr[0]) {
        if (userArr[0] != patternArray[0]) {
          console.log('incorrect');
          $scope.youLose();
        } else {
          console.log('1correct');
        }
      }
      if (userArr[1]) {
        if (userArr[1] != patternArray[1]) {
          $scope.youLose();
        } else {
          console.log('2correct');
        }
      }
      if (userArr[2]) {
        if (userArr[2] != patternArray[2]) {
          $scope.youLose();
        } else {
          console.log('3correct');
        }
      }
      if (userArr[3]) {
        console.log('in');
        if (userArr[3] != patternArray[3]) {
          $scope.youLose();
        } else {
          $scope.youWin();
          console.log('you win!');
        }
      }
    };

    $scope.youLose = function() {
      $scope.$apply(function() {
        $scope.betweenRounds = true;
      });
      console.log('you lost');
    };

    $scope.youWin = function() {
      $scope.round++;
      $scope.$apply(function() {
        $scope.lose = 'nice job!';
        $scope.betweenRounds = true;
        $scope.next = 'next';
      });
      console.log('winner');
    };

    $scope.resetRound = function() {
      $scope.status = '';
      patternArray = [];
      userArr = [];
      $scope.betweenRounds = false;
      console.log('reset');
    };

  }]);
})(angular);
