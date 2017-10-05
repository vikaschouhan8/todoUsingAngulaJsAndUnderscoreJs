angular.module("todoApp")
.controller('leafletController', [ '$scope','leafletData','$timeout', '$http', function($scope,leafletData, $timeout, $http) {
            
            $scope.markers = {};

            angular.extend($scope, {
                indore: {
                    lat: 22.0391667,
                    lng: 75.525,
                    zoom: 6
                }
                
            });

            $http.get('assets/json/markers.json')
                .success(function(data) {                  
                    for(var i=0; i <= data.length; i++){
                        $scope.markers[i] = {
                            lat:data[i].lat,
                            lng:data[i].lng,
                        }
                    }; 
            });
            
            $scope.$on("sidenavclose", function(){
                leafletData.getMap().then(function(map) {
                    console.log("my map object is", map);
                    $timeout(function(){
                        map.invalidateSize();
                        var zoom = map.getZoom();
                        console.log(zoom);
                    },200)   
                })
            });
}]);


