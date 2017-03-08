// (function(ng) {
//     ng.module('Simon').controller('GameController', ['$scope', '$q', function($scope, $q) {
//
//         let green = $('.topright').data('id');
//         let red = $('.topleft').data('id');
//         let blue = $('.bottomleft').data('id');
//         let yellow = $('.bottomright').data('id');
//         // let timer = 20;
//         // let timerEnd = 0;
//         let turnDisplay = document.querySelector('.centershape');
//         let centerDisplay = document.createElement('span');
//         let start = document.querySelector('.start-game');
//         let patternArray = [];
//         let userArr = [];
//         let arrayMatch = false;
//         let num = 0;
//         let points = 0;
//         let score = 0;
//         let doodoo = 'katie';
//         let slices = 1;
//
//         start.onclick = function() {
//             $scope.gamePattern();
//         };
//
//         $('.slice').on('mousedown mouseup', function() {
//             $(this).toggleClass('select');
//         });
//
//         $('.slice').on('click', function() {
//             console.log($(this).data('id'));
//             userArr.push($(this).data('id'));
//             for (var i = 0; i < userArr.length; i++) {
//                 if (patternArray === userArr) {
//                     arrayMatch = true;
//                     return arrayMatch;
//                 }
//             }
//             console.log('arraymatch', arrayMatch);
//             $scope.checkPattern(arrayMatch);
//         });
//
//         $scope.checkPattern = function() {
//             for (let i = 0; i < patternArray.length; i++) {
//                 if (arrayMatch) {
//                     $('.center-display').html(`round ${slices - 1}`);
//                     console.log('win round');
//                     $scope.gamePattern();
//                 } else {
//                     console.log('lost', patternArray, userArr);
//                     $('.center-display').html(`you lose ${currentUser.name}, lol`);
//                 }
//             }
//
//             // if (patternArray === userArr) {
//             //     console.log('you should win', patternArray, userArr);
//             //     $('.center-display').html(`you win ${currentUser.name}, you asshole`);
//             // } else {
//             //   console.log('aaaaaah');
//             //     $('.center-display').html(`you lose ${currentUser.name}, lol`);
//             //
//             // }
//
//
//
//         };
//         $scope.gamePattern = function() {
//             while (patternArray.length < slices) {
//                 let rand = Math.floor(Math.random() * 4);
//                 console.log('slices', slices);
//                 patternArray.push(rand);
//
//             }
//             setTimeout(function() {
//                 $scope.lightGame();
//             }, 1000);
//         };
//
//         $scope.lightGame = function() {
//             for (let i = 0; i < patternArray.length; i++) {
//                 setTimeout(function(i) {
//                     setTimeout(function() {
//                         console.log(patternArray[i]);
//
//                         $(`.slice[data-id=${patternArray[i]}]`).toggleClass('select');
//                     }, 1000);
//                     $(`.slice[data-id=${patternArray[i]}]`).toggleClass('select');
//                     num++;
//                     slices++;
//                     console.log('slice o pie', slices);
//                     console.log('nummmmmmm', num);
//                     if (num == patternArray.length) {
//                         setTimeout(function() {
//                             $scope.startGame();
//
//                         }, 1500);
//                     }
//                 }, i * 1500, i);
//             }
//         };
//
//         $scope.startGame = function() {
//             console.log('in');
//             centerDisplay.className = 'center-display';
//             centerDisplay.innerHTML = 'play!';
//             turnDisplay.appendChild(centerDisplay);
//         };
//
//         $scope.addScore = function(score) {
//             console.log('scores', score);
//         };
//
//     }]);
// })(angular);
