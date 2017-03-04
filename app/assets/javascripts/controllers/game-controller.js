(function(ng) {
  ng.module('Simon').controller('GameController', ['$scope', '$q', function($scope, $q) {

    let green = $('.topright').data('id');
    let red = $('.topleft').data('id');
    let blue = $('.bottomleft').data('id');
    let yellow = $('.bottomright').data('id');
    let timer = 4;
    // let timerEnd = 0;
    let turnDisplay = document.querySelector('.centershape');
    let countDown = document.createElement('span');
    let start = document.querySelector('.start-game');
    let patternArray = [];
    const slices = [red, green, blue, yellow];

    start.onclick = function() {
      $scope.gamePattern();
    };

    $('.slice').on('click', function() {
      console.log($(this).data('id'));
    });

    $scope.gamePattern = function() {
      while (patternArray.length < slices.length) {
        let rand = slices[Math.floor(Math.random() * slices.length)];
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
            console.log(patternArray[i]);
            $(`.slice[data-id=${patternArray[i]}]`).toggleClass('active');
          }, 1000);
          $(`.slice[data-id=${patternArray[i]}]`).toggleClass('active');
        }, i * 1500, i);
      }
    };

    $scope.startGame = function() {
      countDown.className = 'count-down';
      countDown.innerHTML = `${timer}`;
      turnDisplay.appendChild(countDown);
    };


  }]);
})(angular);
