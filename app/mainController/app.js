agGrid.initialiseAgGridWithAngular1(angular);
angular.module('todoApp', ['ngMaterial','ui.router','leaflet-directive', 'agGrid'])

.config(function($stateProvider, $urlRouterProvider){
    $stateProvider 
        .state('agGrid',{
            url:'/agGrid',
            templateUrl:'app/agGrid/view/agGrid.html',
            controller:'tablegridCtrl'
        })
        .state('map',{
            url:'/map',
            templateUrl:'app/map/view/map.html',
            controller:'leafletController'
        })
        .state('todo',{
            url:'/todo',
            templateUrl:'app/todo/view/todo.html'
        });
    $urlRouterProvider.otherwise('/agGrid');
    
})
.controller("sideNavController", ['$scope', '$rootScope', '$timeout',function($scope, $rootScope, $timeout){
    $scope.sideNavToggle = function(){
        $rootScope.$broadcast("sidenavclose", true);
    };
    function runBlock($rootScope) {
        angular.extend($rootScope, {
          center: {},
          markers: {},
        });
    }
    angular.element(document).ready(function () {
        $timeout(function () {
            jQuery("#Myscroll").mCustomScrollbar(
            {
        autoHideScrollbar:true
        });
     
        jQuery('#Myscroll').mCustomScrollbar();
        jQuery('#Myscroll').mCustomScrollbar();
       
        }, 200);
    });
}]);