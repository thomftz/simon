(function(ng) {
    ng.module('Simon').controller('GameController', ['$scope', '$q', function($scope, $q) {
        const startTime = new Date().getTime();
        let timer = 20;
        let timerEnd = 0;
        let turnDisplay = document.querySelector('.centershape');
        let countDown = document.createElement('span');



        let start = document.querySelector('.start-game');
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
            setInterval(function() {
                timer--;
                document.querySelector('.count-down').value = timer;
                if (timer < 0)
                    clearInterval(startTimer);
                countDown.innerHTML = `${timer}`;
            }, 1000);
        };
        $scope.gamePattern = function() {
            console.log('in gamepatterrrrrn');
        };
    }]);
})(angular);
