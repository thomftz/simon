(function(ng) {
  ng.module('Simon').controller('GameController', ['$scope', '$q', function($scope, $q) {

    let green = $('.topright').data('id');
    let red = $('.topleft').data('id');
    let blue = $('.bottomleft').data('id');
    let yellow = $('.bottomright').data('id');
    // let timer = 20;
    // let timerEnd = 0;
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
    //
    // $scope.$watch('betweenRounds', function(newValue, oldValue) {
    //   console.log('shiiiit');
    // });
    // $scope.$digest();



    $scope.start = function() {
      $scope.status = 'ready!';
      $scope.gamePattern();
    };

    $('.slice').on('mousedown mouseup', function() {
      $(this).toggleClass('select');
    });

    $('.slice').on('click', function() {
      console.log($(this).data('id'));
      userArr.push($(this).data('id'));
      console.log(userArr);
      $scope.checkPattern();
    });

    $scope.youLose = function() {
      $scope.$apply(function() {
        $scope.betweenRounds = true;
        console.log('you lost');
      });
    };

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
        if (patternArray[2] === userArr[2]) {
          // console.log('in2');
        } else {
          $('.center-display').html(`you lose ${currentUser.name}, lol`);
          let score = points + 75;
          // $scope.addScore(score);
        }
      }
      if (userArr[3]) {
        console.log('in3');
        if (patternArray[3] === userArr[3]) {
          $('.center-display').html('nice!');
          let score = 25;
          // $scope.addScore(score);
        } else {
          $('.center-display').html(`you lose ${currentUser.name}, lol`);

        }
      }


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

      // $scope.status = 'play!';
      // turnDisplay.appendChild(centerDisplay);
    };

    // $scope.addScore = function(score) {
    //   console.log('scores', score);
    // };
    $scope.resetRound = function() {
      patternArray = [];
      // $scope.$apply(function() {
      $scope.betweenRounds = false;
      console.log('scope reset');
      // });
      console.log('reset');
    };

  }]);
})(angular);
