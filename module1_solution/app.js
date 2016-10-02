(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.outputMessage = "";
    $scope.dishesListString = "";
    $scope.displayLunchResult = function() {
      var number_of_dishes =
        countDishesFromString($scope.dishesListString);
      if (number_of_dishes === 0) {
        $scope.outputMessage = 'Please enter data first';
        $scope.OutputStyle = {'color': 'red', 'border': '1px solid red'};
      } else if (number_of_dishes <= 3) {
        $scope.outputMessage = 'Enjoy!';
        $scope.OutputStyle = {'color': 'green', 'border': '1px solid green'};
      } else {
        $scope.outputMessage = 'Too much!';
        $scope.OutputStyle = {'color': 'green', 'border': '1px solid green'};
      }
    };
  };

  function countDishesFromString(dishesString) {
    var dishesArray = dishesString.split(",");
    var result = 0;
    for (var i = 0; i < dishesArray.length; i++) {
      /// do NOT count empty strings in dishes list
      if (dishesArray[i].trim()) {
        result++;
      }
    }
    return result;
  }


})();
