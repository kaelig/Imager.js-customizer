function GeneratorCtrl($scope) {
    $scope.scriptPath = 'path/to/imager.js';
    $scope.selector = '.delayed-image-load';
    $scope.path = 'http://example.com/path/to/{width}.jpg';
    $scope.availableWidths = '320, 480, 768, 1024';
    $scope.strategy = 'replacer';
    $scope.replacementDelay = 200;
}

angular.module('generator', [])
    .directive('selectOnClick', function () {
        return function (scope, element, attrs) {
            element[0].addEventListener('click', function() {
                this.select();
            });
        };
    });
