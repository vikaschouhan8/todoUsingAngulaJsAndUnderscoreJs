angular.module('todoApp')
.controller("tablegridCtrl", function($scope, $http, $state, $mdSidenav, $stateParams, $mdDialog, $interval, leafletMarkerEvents, leafletData, $timeout, $q, $log) {
    var data = [
        {
            "status": "Disable",
            "name": "James",
            "lastname": "smith",
            "address": "12/A",
            "email": "james@gmail.com",
            "rate": 50000,
            "type": "Website",
            "city": "Indore",
            "postalCode": "452301",
            "state": "Madhya Pradesh",
            "lat": 22.7368,
            "lng": 75.9086,
            "image":"girl",
        },
        {
            "status": "Enable",
            "name": "Mark",
            "lastname": "smith",
            "address": "12/A",
            "city": "Jaipur",
            "lat": 26.9124,
            "lng": 75.7873,
            "type": "Website",
            "postalCode": "452301",
            "email": "james@gmail.com",
            "rate": 13005,
            "state": "Rajsthan",
            "image":"mark"
        },
        {
            "status": "Disable",
            "name": "Jack",
            "lastname": "smith",
            "address": "12/A",
            "city": " Ahamdabad",
            "lat": 23.0225,
            "lng": 72.5714,
            "email": "james@gmail.com",
            "type": "Website",
            "rate": 5213425,
            "postalCode": "452301",
            "state": "Gujrat",
            "image":"bill"
        },
        {
            "status": "Enable",
            "name": "John",
            "lastname": "smith",
            "address": "12/A",
            "email": "james@gmail.com",
            "rate": 534535,
            "city": "Indore",
            "type": "Website",
            "postalCode": "452301",
            "lat": 22.7368,
            "lng": 75.9086,
            "state": "Punjab",
            "image":"girl"
            
        },
        {
            "status": "Disable",
            "name": "Ron",
            "lastname": "smith",
            "address": "12/A",
            "city": "Chennai",
            "type": "Website",
            "email": "james@gmail.com",
            "lat": 13.1000,
            "lng": 80.3000,
            "rate": 52332,
            "postalCode": "452301",
            "state": "Uttar Pradesh",
            "image":"alan"
            
        },
        {
            "status": "Enable",
            "name": "Liza",
            "lastname": "smith",
            "address": "12/A",
            "email": "james@gmail.com",
            "rate": 239845,
            "type": "Application",
            "city": "bangalore",
            "postalCode": "452301",
            "state": "Himachal Pradesh",
            "lat": 13.0000,
            "lng": 77.6086,
            "image":"girl"
            
        },
        {
            "status": "Enable",
            "name": "Smokeyy",
            "lastname": "smith",
            "address": "12/A",
            "email": "Smokeyy@yahoo.com",
            "type": "Application",
            "rate": 44895,
            "city": "Delhi",
            "postalCode": "452301",
            "state": "Himachal Pradesh",
            "lat": 28.7368,
            "lng": 77.1086,
            "image":"mark"
            
        },
        {
            "status": "Enable",
            "name": "Lazyyy",
            "lastname": "smith",
            "email": "Lazyyy@gmail.com",
            "rate": 45955,
            "address": "12/A",
            "city": " Ahamdabad",
            "lat": 23.0225,
            "lng": 72.5714,
            "type": "Website",
            "postalCode": "452301",
            "state": "Gujrat",
            "image":"girl"
            
        },
        {
            "status": "Enable",
            "name": "Smiley",
            "lastname": "smith",
            "email": "Smiley@yahoo.com",
            "type": "Website",
            "rate": 5566,
            "address": "12/A",
            "city": " Ahamdabad",
            "lat": 23.0225,
            "lng": 72.5714,
            "postalCode": "452301",
            "state": "Gujrat",
            "image":"bill"
            
        },
        {
            "status": "Enable",
            "name": "Bravo",
            "lastname": "smith",
            "address": "12/A",
            "city": "Indore",
            "email": "Bravo@gmail.com",
            "rate": 56565,
            "type": "Website",
            "lat": 22.7368,
            "lng": 75.9086,
            "postalCode": "452301",
            "state": "Himachal Pradesh",
            "image":"alan"
            
        },
        {
            "status": "Enable",
            "name": "Milley",
            "lastname": "smith",
            "address": "12/A",
            "email": "Milley@gmail.com",
            "rate": 5061,
            "city": "Jaipur",
            "lat": 26.9124,
            "lng": 75.7873,
            "type": "Application",
            "postalCode": "452301",
            "state": "Rajsthan",
            "image":"girl"
            
        },
        {
            "status": "Disable",
            "name": "Pikey",
            "lastname": "smith",
            "email": "Pikey@yahoo.com",
            "rate": 565421,
            "address": "12/A",
            "type": "Application",
            "city": "Jaipur",
            "lat": 26.9124,
            "lng": 75.7873,
            "postalCode": "452301",
            "state": "Rajsthan",
            "image":"girl"
            
        },
        {
            "status": "Disable",
            "name": "Jones",
            "lastname": "smith",
            "address": "12/A",
            "email": "Jones@yahoo.com",
            "rate": 52998,
            "city": " Ahamdabad",
            "lat": 23.0225,
            "lng": 72.5714,
            "type": "Application",
            "postalCode": "452301",
            "state": "Gujrat",
            "image":"girl"
            
        },
        {
            "status": "Enable",
            "name": "Mill",
            "lastname": "smith",
            "address": "12/A",
            "email": "Mill@gmail.com",
            "rate": 875245,
            "city": "Jaipur",
            "lat": 26.9124,
            "lng": 75.7873,
            "type": "Website",
            "postalCode": "452301",
            "state": "Rajsthan",
            "image": "img14"
        },
        {
            "status": "Disable",
            "name": "shankey",
            "lastname": "smith",
            "address": "12/A",
            "type": "Website",
            "city": "Jaipur",
            "lat": 26.9124,
            "lng": 75.7873,
            "email": "shankey@yahoo.com",
            "rate": 525287,
            "postalCode": "452301",
            "state": "Rajsthan",
            "image":"girl"
            
        }
    ]
    var columnDefs = [
        {headerName: "", field: "checkbox",
                    headerCheckboxSelection: true,
                    headerCheckboxSelectionFilteredOnly: true,
                    checkboxSelection: true, 
                    // cellRenderer: check,
                    width: 140,
                    pinned:'left'
                    },  
        {headerName: "Status", field: "status" ,cellRenderer : statusLine },
        {headerName: "Name", field: "image", cellRenderer: icon},  
        {headerName: "Lastame", field: "lastname"},
        {headerName: "Address", field: "address"},                       
        {headerName: "Type", field: "type", editable: true},
        {headerName: "Device Name", field: "name"},
        {headerName: "city", field: "city"},
        {headerName: "Email", field: "email"},        
        {headerName: "Menu", field: "action",  cellRenderer :opendropdwn, pinned:'right'}
    ];

    $scope.gridOptions = {
        // we are using angular in the templates
        angularCompileRows: true,
        columnDefs: columnDefs,
        rowData: data,
        enableFilter: true,
        enableSorting:true ,
        editable:true,
        enableRowSelection:true,
        suppressRowClickSelection: true,
        // suppressCellSelection:false,
        SelectedRows:true,     
        rowSelection: 'multiple',
        rowHeight:48,
        headerHeight:48,
        singleClickEdit: true,
        enableColResize: true,
        animateRows: true,
        debug: true,
        pagination: true,
        paginationPageSize: 10,
        // getRowNodeId: function(data) { return data.symbol; }
    };

    function statusLine(params){
        return params.data.status == 'Disable' ? '<span class="status-line-red"> &nbsp; Disable' : '<span class="status-line-green"> &nbsp; Active' ;
    }

    function icon(params){
        return '<div layout="row"><div flex="30" style="margin-top: 5px;" ><img style="border-radius: 50%;" class="img" src="assets/img/avatar/'+params.data.image+'.jpg"/></div><div flex>'+params.data.name + '</div></div>';  
    }
  
    function opendropdwn(params) {
        return '<md-menu md-position-mode="target-left bottom">' +
            '<md-button class="md-icon-button mdi mdi-dots-vertical dots" ng-click="$mdOpenMenu();" aria-label="user">'+
            '<i class="zmdi zmdi-menu"></i>'+
            '</md-button>' +
            '<md-menu-content width="3" height="5">' +
            // '<md-menu-item>' +
            // '<md-button ng-click="gridEdit(data)">Edit</md-button>' +
            // '</md-menu-item>' +
            '<md-menu-item>' +
            '<md-button ng-click="onRemoveSelected()">'+
            '<i class="zmdi zmdi-delete"></i>Delete'+
            '</md-button>' +
            '</md-menu-item>' +
            '<md-menu-item>' +
            '<md-button ng-click="activation(data)" >'+
            '<i class="zmdi zmdi-menu"></i>{{!data.status}}'+
            '</md-button>' +
            '</md-menu-item>' +
            // '<md-menu-item>' +
            // '<md-button ng-click="DisableFn(data)" >Disable</md-button>' +
            // '</md-menu-item>' +
            '<md-menu-item>' +
            '<md-button ng-click="showAdvanced(data)">'+
            '<i class="zmdi zmdi-map"></i>Map'+
            '</md-button>' +
            '</md-menu-item>' +
            '</md-menu-content>' +
            '</md-menu>'
    }

    $scope.openMenu = function($mdOpenMenu, ev){
        originatorEv = ev;
        $mdOpenMenu(ev);
    };
    
    $scope.showAdvanced = showAdvanced;
    function showAdvanced(params, ev) {
        var cityName = params.city;
        console.log(cityName, 'cityName');
        $mdDialog.show({
                controller: DialogController,
                templateUrl: 'app/agGrid/view/mapDialog.html', 
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                locals: {
                    user: params
                }
            })
            .then(function(answer) {
                $scope.status = 'You said the information was "' + answer + '".';
            }, function() {
                $scope.status = 'You cancelled the dialog.';
            });
    };

    function DialogController($scope, $mdDialog, user) {
        $scope.hide = function() {
            $mdDialog.hide();
        };

        $scope.cancel = function() {
            $mdDialog.cancel();
        };

        $scope.answer = function(answer) {
            $mdDialog.hide(answer);
        };

        $scope.showMapUI = function() {
            leafletData.getMap().then(function(map) {
                setTimeout(function() {
                    map.invalidateSize(false);
                }, 200);
            });
        };
        $scope.showMapUI()

        $scope.mapData = user;
        var cityName = user.city;
        var lat = user.lat;
        var lng = user.lng;
        console.log('1.', cityName, '2.', lat, '3.', lng);

        var markers = [];
        markers.push({
            lat: lat,
            lng: lng,
            messgae: cityName
        })
        angular.extend($scope, {
            center: {
                lat: 22.7196,
                lng: 75.8577,
                zoom: 4
            },
            markers: markers,

            layers: {
                baselayers: {
                    googleTerrain: {
                        name: 'Google Terrain',
                        layerType: 'TERRAIN',
                        type: 'google'
                    },
                    googleHybrid: {
                        name: 'Google Hybrid',
                        layerType: 'HYBRID',
                        type: 'google'
                    },
                    googleRoadmap: {
                        name: 'Google Streets',
                        layerType: 'ROADMAP',
                        type: 'google'
                    }
                },
                overlays: {}
            }

        });


    }
     
    $scope.delete = function(params){
        var txt;
        var r = confirm("Press a button!");
        if (r == true) {
            var selectedData = $scope.gridOptions.api.getSelectedRows();
            $scope.gridOptions.api.updateRowData({remove: selectedData});
        } else {
            txt = "You pressed Cancel!";
        }
    }

    $scope.onRemoveSelected = function(params) {
        var selectedData = $scope.gridOptions.api.getSelectedRows();
        $scope.gridOptions.api.updateRowData({remove: selectedData});
        console.log('Your Row Deleted');
        alert('Your Row Deleted');
        
    }

    function removeSelected() {
        var selectedRowNodes = gridOptions.api.getSelectedNodes();
        var selectedIds = selectedRowNodes.map( function(rowNode) { return rowNode.id; });
        data = data.filter( function(dataItem) { return selectedIds.indexOf(dataItem.symbol) < 0; });
        gridOptions.api.setRowData(data);
    }

    $scope.state = function(params, status){
         var data = params; 
         data.status = status;       
    };

});
