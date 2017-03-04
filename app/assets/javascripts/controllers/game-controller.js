(function(ng) {
    ng.module('Simon').controller('GameController', ['$scope', '$q', function($scope, $q) {

        let green = $('.topright').data('id');
        let red = $('.topleft').data('id');
        let blue = $('.bottomleft').data('id');
        let yellow = $('.bottomright').data('id');
        let timer = 20;
        // let timerEnd = 0;
        let turnDisplay = document.querySelector('.centershape');
        let countDown = document.createElement('span');
        let start = document.querySelector('.start-game');
        let patternArray = [];
        let num = 0;
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
                    num++;
                    console.log('nummmmmmm', num);
                    if (num == patternArray.length) {
                        $scope.startGame();
                    }
                }, i * 1500, i);
            }

        };

        $scope.startGame = function() {
            console.log('in');
            countDown.className = 'count-down';
            countDown.innerHTML = `${timer}`;
            turnDisplay.appendChild(countDown);
            startTimer = setInterval(function() {
                timer--;
                $('.count-down').val(timer);
                if (timer === 0) {
                    clearInterval(startTimer);
                    countDown.innerHTML = 'you lose trickkk';
                } else {
                    countDown.innerHTML = `${timer}`;
                }

            }, 1000);
        };


    }]);
})(angular);