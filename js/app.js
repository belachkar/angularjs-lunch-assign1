(function () {
  ('use strict');

  const getLunchsNbr = (str) =>
    str
      .split(',')
      .map((l) => l.trim())
      .filter((l) => l).length;

  const getMsg = (lunchs) => {
    const lunchesNbr = getLunchsNbr(lunchs);

    return lunchesNbr < 1 ? 'Please enter data first' : lunchesNbr < 4 ? 'Enjoy!' : 'Too much!';
  };

  const lunchCtrlr = ($scope) => {
    $scope.lunchs = '';
    $scope.msg = '';

    $scope.updateMsg = () => ($scope.msg = getMsg($scope.lunchs));
  };

  // To protect the code from minification
  lunchCtrlr.$inject = ['$scope'];

  angular.module('LunchCheck', []).controller('LunchCheckController', lunchCtrlr);
})();
