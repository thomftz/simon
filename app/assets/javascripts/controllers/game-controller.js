(function(ng) {
    ng.module('Simon').controller('GameController', ['$scope', '$q', function($scope, $q) {

        let green = $('#topright').data('id');
        let red = $('#topleft').data('id');
        let blue = $('#bottomleft').data('id');
        let yellow = $('#bottomright').data('id');
        let timer = 20;
        let timerEnd = 0;
        let turnDisplay = document.querySelector('.centershape');
        let countDown = document.createElement('span');
        let start = document.querySelector('.start-game');
        let patternArray = [];
        let runPattern = [];
        start.addEventListener('click', function() {
            $scope.startGame();
        });


        $scope.startGame = function() {
            countDown.className = 'count-down';
            countDown.innerHTML = `${timer}`;
            turnDisplay.appendChild(countDown);
            $scope.gamePattern();
        };

        start.onclick = function() {
            let timerInt = setInterval(function() {
                timer--;
                countDown.innerHTML = `${timer}`;
                if (timer === 0) {
                    clearInterval(timerInt);
                }
            }, 1000);
        };
        $scope.gamePattern = function() {
            while (patternArray.length <= 3) {
                let pattern = Math.floor(Math.random() * 4);

                patternArray.push(pattern);
            }

            $scope.gamePlay();

        };
        $scope.gamePlay = function() {
            let light = patternArray[0];
            let patternSlice = patternArray.slice(0, 1);
            // do {
            //     if (light === red) {
            //         patternArray.slice(0, 1);
            //         runPattern.push(patternSlice);
            //     } else if (light === blue) {
            //         patternArray.slice(0, 1);
            //         runPattern.push(patternSlice);
            //     } else if (light === yellow) {
            //         patternArray.slice(0, 1);
            //         runPattern.push(patternSlice);
            //     } else if (light === green) {
            //         patternArray.slice(0, 1);
            //         runPattern.push(patternSlice);
            //     }
            // } while (patternArray.length > runPattern.length);
            console.log('pattern array', patternArray);
            // console.log('pattern sliced', patternArray.slice(0, 1));
            // console.log('runpattern array', runPattern);
        };
    }]);
})(angular);
