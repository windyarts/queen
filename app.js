/*global angular:true*/
var queen = angular.module('queen', []);

queen.config(function($routeProvider) {
    $routeProvider.otherwise({
        templateUrl: 'config.html',
        controller: 'ConfigController'
    });
    $routeProvider.when('/enjoy', {
        templateUrl: 'main.html',
        controller: 'MainController'
    });
});

queen.controller('DataController', function($scope) {
    $scope.teams = [
        'M&M\'s',
        'P3',
        'Doraemon',
        'Sync',
        'Super Windows',
        'Ads',
        'Data Mining',
        'Hacker',
        'Social'
    ];
    $scope.selectedTeams = $scope.teams.slice();

    $scope.excludeTeam = function(team) {
        var index = $scope.selectedTeams.indexOf(team);
        if (index > -1) {
            $scope.selectedTeams.splice(index, 1);
        }
    };

    $scope.excludeTeam = function(team) {
        var index = $scope.selectedTeams.indexOf(team);
        if (index === -1) {
            $scope.selectedTeams.push(team);
        }
    };
});

queen.controller('ConfigController', function($scope) {
});
queen.controller('MainController', function($scope) {});