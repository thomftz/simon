(function(ng) {
    ng.module('Simon').controller('GameController', ['$scope', '$q', function($scope, $q) {

        let green = $('.topright').data('id');
        let red = $('.topleft').data('id');
        let blue = $('.bottomleft').data('id');
        let yellow = $('.bottomright').data('id');
        // let timer = 20;
        // let timerEnd = 0;
        let turnDisplay = document.querySelector('.centershape');
        let centerDisplay = document.createElement('span');
        let start = document.querySelector('.start-game');
        let patternArr = [];
        let userArr = [];
        // let correctArr = [];
        let num = 0;
        let points = 0;
        let score = 0;
        let doodoo = ['katie', 'scott', 'shane'];
        let slices = 1;

        start.onclick = function() {
            $scope.gamePattern();
        };

        $('.slice').on('mousedown mouseup', function() {
            $(this).toggleClass('select');
        });

        $('.slice').on('click', function() {
            console.log('userarr', $(this).data('id'));

            userArr.push($(this).data('id'));
            if (patternArr.length == userArr.length) {
                for (var i = 0; i < patternArr.length; i++) {
                    if (patternArr[i] === userArr[i]) {
                        let arrayMatch = true;
                        $scope.checkPattern(arrayMatch);
                    } else {
                        let arrayMatch = false;
                        $scope.checkPattern(arrayMatch);
                    }
                }

            }

        });

        $scope.checkPattern = function(arrayMatch) {
            console.log('arrayMatch', arrayMatch);

            if (arrayMatch == true) {
                $('.center-display').html(`round ${slices}`);
                slices++;
                userArr = [];
                console.log('win', arrayMatch);
                $scope.gamePattern();
            } else {
                $('.center-display').html(`you lose ${currentUser.name}, lol`);
            }

            // if (patternArray[0] == userArr[0]) {
            //     console.log('you should win', patternArray, userArr);
            //     $('.center-display').html(`you win ${currentUser.name}, you asshole`);
            // } else {
            //   console.log('aaaaaah');
            //     $('.center-display').html(`you lose ${currentUser.name}, lol`);
            //
            // }



        };
        $scope.gamePattern = function() {
            while (patternArr.length < slices) {
                let rand = Math.floor(Math.random() * 4);
                console.log('slices', slices);
                patternArr.push(rand);
                console.log('PATTERARR', patternArr);

            }
            setTimeout(function() {
                $scope.lightGame();
            }, 1000);
        };

        $scope.lightGame = function() {
            for (let i = 0; i < patternArr.length; i++) {
                setTimeout(function(i) {
                    setTimeout(function() {
                        console.log('light game', patternArr[i]);

                        $(`.slice[data-id=${patternArr[i]}]`).toggleClass('select');
                    }, 1000);
                    $(`.slice[data-id=${patternArr[i]}]`).toggleClass('select');
                    num++;
                    if (num == patternArr.length) {
                        setTimeout(function() {
                            $scope.startGame();

                        }, 1500);
                    }
                }, i * 1500, i);
            }
        };

        $scope.startGame = function() {

            centerDisplay.className = 'center-display';
            centerDisplay.innerHTML = 'play!';
            turnDisplay.appendChild(centerDisplay);
        };

        $scope.addScore = function(score) {
            console.log('scores', score);
        };

    }]);
})(angular);
