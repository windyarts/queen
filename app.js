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

    $scope.toggleTeam = function(team) {
        var index = $scope.selectedTeams.indexOf(team);
        if (index > -1) {
            $scope.selectedTeams.splice(index, 1);
        }
        else {
            $scope.selectedTeams.push(team);
        }
    };

    $scope.selected = function(team) {
        return $scope.selectedTeams.indexOf(team) !== -1;
    };
    var isDone = false;
    $scope.flip = function($event) {
        if (isDone) return;
        var index = Math.floor(Math.random() * $scope.selectedTeams.length);
        var team = $scope.selectedTeams[index];
        var el = $event.currentTarget;
        var sound = document.querySelector('#sound');
        if (!el.classList.contains('flipped')) {
            el.classList.add($scope.teamClass(team));
            el.classList.add('flipped');
            sound.load();
            setTimeout(function() {
                sound.play();
            }, 1000);
            isDone = true;
        }
    };
    $scope.teamClass = function(team) {
        return 'team-board-' + $scope.teams.indexOf(team);
    };
});

queen.controller('ConfigController', function($scope) {
});
queen.controller('MainController', function($scope) {});