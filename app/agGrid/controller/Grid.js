angular.module('myTodoList')
    .controller('GridCtrl', function($scope, $http, $state, $mdSidenav, $stateParams, $mdDialog, $interval, leafletMarkerEvents, leafletData, $timeout, $q, $log) {

        $scope.toggleLeft = buildToggler('left');
        $scope.toggleRight = buildToggler('right');
        $scope.isOpenRight = function() {
            return $mdSidenav('right').isOpen();
        };

        function buildToggler(componentId) {
            return function() {
                $mdSidenav(componentId).toggle();
            };
        }


        document.addEventListener("DOMContentLoaded", function() {
            var eGridDiv = document.querySelector('#myGrid');
            new agGrid.Grid(eGridDiv, $scope.gridOptions);
        });
        var data = [{
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
                "image": "img1"
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
                "image": "img2"
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
                "image": "img3"
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
                "image": "img4"
            },
            {
                "status": "Disable",
                "name": "Ron",
                "lastname": "smith",
                "address": "12/A",
                "city": "Indore",
                "type": "Website",
                "email": "james@gmail.com",
                "lat": 22.7368,
                "lng": 75.9086,
                "rate": 52332,
                "postalCode": "452301",
                "state": "Uttar Pradesh",
                "image": "img5"
            },
            {
                "status": "Enable",
                "name": "Liza",
                "lastname": "smith",
                "address": "12/A",
                "email": "james@gmail.com",
                "rate": 239845,
                "type": "Application",
                "city": "Indore",
                "postalCode": "452301",
                "state": "Himachal Pradesh",
                "lat": 22.7368,
                "lng": 75.9086,
                "image": "img6"
            },
            {
                "status": "Enable",
                "name": "Smokeyy",
                "lastname": "smith",
                "address": "12/A",
                "email": "Smokeyy@yahoo.com",
                "type": "Application",
                "rate": 44895,
                "city": "Indore",
                "postalCode": "452301",
                "state": "Himachal Pradesh",
                "lat": 22.7368,
                "lng": 75.9086,
                "image": "img7"
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
                "image": "img8"
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
                "image": "img9"
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
                "image": "img10"
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
                "image": "img11"
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
                "image": "img12"
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
                "image": "img13"
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
                "lat": 26.9124,
                "lng": 75.7873,
                "email": "shankey@yahoo.com",
                "rate": 525287,
                "postalCode": "452301",
                "state": "Rajsthan",
                "image": "img15"
            }
        ]
        var columnDefs = [{
                headerName: "",
                width: 80,
                pinned: 'left',
                headerCheckboxSelection: true,
                //headerCheckboxSelectionFilteredOnly: true,
                checkboxSelection: true
            },
            {
                headerName: "Status",
                field: "status",
                cellRenderer: checkStatus
            },
            { headerName: "Name", field: "name", cellRenderer: userImage },
            { headerName: "LastName", field: "lastname" },
            { headerName: "Address", field: "address" },
            { headerName: "City", field: "city" },
            { headerName: "postalCode", field: "postalCode" },
            { headerName: "State", field: "state" },
            { headerName: "Action", field: "action", width: 120, cellRenderer: opendropdwn, pinned: 'right' }
        ]

        $scope.gridOptions = {
            icons: {
                checkboxChecked: '<img class="checkboxImg" src="../app/assets/img/checked.png">',

                checkboxUnchecked: '<img  class="checkboxImg"src="../app/assets/img/uncheck.jpg">'
            },
            columnDefs: columnDefs,
            rowData: data,
            rowHeight: 48,
            enableSorting: true,
            rowSelection: 'multiple',
            //rowDeselection: true,
            //suppressCellSelection: true,
            //suppressHorizontalScroll: true,
            //suppressColumnVirtualisation: true,
            angularCompileRows: true,
            enableColResize: true,
            //enableRangeSelection: true,

            enableFilter: true,
            //suppressRowClickSelection: true,
            //suppressCellSelection: true,
            suppressRowClickSelection: true,
            animateRows: true,

            //enableCellSelection: true,
            //rowModelType: 'pagination',

            // onModelUpdated: modelUpdated,
            debug: true,
            pagination: true,
            // paginationAutoPageSize: true,
            paginationPageSize: 10,
            //domLayout: "forPrint"


            // headerHeight: 40,
            // rowGroupPanelShow: 'always',
            // pivotPanelShow: 'always',
            // showToolPanel: true,
            // groupSelectsChildren: true,
            //   onRowClicked: showAdvanced,
            // onCellValueChanged: function(params) {
            //     console.log('onCellValueChanged: ' + ' = ' + params.data.status);
            // }
        };
        // $timeout(function() {
        //     $http.get('../app/assets/data/list.json')
        //         .then(function(response) {
        //             $scope.GridData = $scope.gridOptions.api.setRowData(response.data);
        //             console.log('gridData', $scope.GridData);
        //         });
        // }, 500);




        function opendropdwn(params) {
            return '<md-menu md-position-mode="target-left bottom">' +
                '<md-button class="md-icon-button mdi mdi-dots-vertical dots" ng-click="$mdOpenMenu();" aria-label="user"></md-button>' +
                '<md-menu-content width="3" height="5">' +
                '<md-menu-item>' +
                '<md-button ng-click="gridEdit(data)">Edit</md-button>' +
                '</md-menu-item>' +
                '<md-menu-item>' +
                '<md-button ng-click="onRemoveSelected()">Delete</md-button>' +
                '</md-menu-item>' +
                '<md-menu-item>' +
                '<md-button ng-click="activation(data)" >{{!data.status}}</md-button>' +
                '</md-menu-item>' +
                // '<md-menu-item>' +
                // '<md-button ng-click="DisableFn(data)" >Disable</md-button>' +
                // '</md-menu-item>' +
                '<md-menu-item>' +
                '<md-button ng-click="showAdvanced(data)">Map</md-button>' +
                '</md-menu-item>' +
                '</md-menu-content>' +
                '</md-menu>'
        }

        function checkStatus(params) {
            return params.value == 'Enable' ? '<span class="green"> &nbsp; Enable</span>' : '<span class="red"> &nbsp; Disable</span>';
        }

        function userImage(params) {
            var img = '<span class=""><img  src="../app/assets/img/' + params.data.image + '.png" width="30px" height="30px" style="border-radius:50%;vertical-align:middle;margin-right:8px;"></span>'
            return img + "" + params.value;
        }
        // $scope.newCheckStatus = function(data) {
        //         if (data.status == "Disable") {
        //             $scope.currentStatus = "Enable";
        //             console.log("status " + $scope.currentStatus);
        //         } else if (data.status == "Enable") {
        //             $scope.currentStatus = "Disable";
        //         }
        //         // $scope.gridOptions.api.updateRowData($scope.gridOptions.rowData);
        // }
        // $scope.newCheckStatus(data);
        $scope.DisableFn = function(data) {
            if (data.status == 'Enable') {
                data.status = 'Disable';
                $scope.gridOptions.api.updateRowData($scope.gridOptions.rowData);
            }
        }
        $scope.EnableFn = function(data) {
            if (data.status == 'Disable') {
                data.status = 'Enable';
                $scope.gridOptions.api.updateRowData($scope.gridOptions.rowData);
            }
        }
        $scope.activation = function(data) {
            if (data.status == 'Enable') {
                $scope.DisableFn(data);
            } else {
                $scope.EnableFn(data);
            }
        }

        $scope.gridEdit = function(val) {
            $state.go('gridEdit', { data: val })
        }


        $scope.onRemoveSelected = function(params) {
            var selectedData = $scope.gridOptions.api.getSelectedRows();
            $scope.gridOptions.api.updateRowData({
                remove: selectedData
            });
            console.log('Your Row Deleted');
        }

        var newCount = 1;

        function createNewRowData() {
            var newData = {
                "status": "Disable",
                "name": "James" + newCount,
                "lastname": "smith",
                "address": "12/A",
                "email": "james@gmail.com",
                "rate": 50000 + (newCount * 2),
                "type": "Website",
                "city": "Indore",
                "postalCode": "452301",
                "state": "Madhya Pradesh",
                "lat": 22.7368,
                "lng": 75.9086,
                "image": "../app/assets/img/img1.png"
            };
            newCount++;
            return newData;
        }

        function getRowData() {
            var rowData = [];
            gridOptions.api.forEachNode(function(node) {
                rowData.push(node.data);
            });
            console.log('Row Data:');
            console.log(rowData);
        }

        $scope.onAddRow = function() {
            var newItem = createNewRowData();
            var res = $scope.gridOptions.api.updateRowData({ add: [newItem], addIndex: 0 });
        }

        $scope.showAdvanced = showAdvanced;

        function showAdvanced(params, ev) {
            var cityName = params.city;
            console.log(cityName, 'cityName');
            $mdDialog.show({
                    controller: DialogController,
                    templateUrl: '../app/uiapp/common/src/Todolist/view/smallMap.html',
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
                    zoom: 5
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
        $scope.searching = false;
        // $scope.clearSearch = function(data) {
        //     for (var i = 0; data.length >= 0; i++) {
        //         if (data.name == data) {
        //             console.log('searchinggggg', data.name);
        //         } else {
        //             console.log('searchinggggg', search.name);
        //         }
        //     }
        // }
        $scope.showOnly = function(data) {
            var newListdata = { name: data };
            $scope.gridOptions.api.setRowData($scope.gridOptions.rowData);
            console.log("duplicate value found in newListdata", newListdata);
            // data.unshift(data);
        };
        $scope.checkGrid = function(data) {
            for (var i = 0; data.length >= 0; i++) {
                if (data[i].name == data) {
                    console.log("duplicate value found");
                    return false;
                }
            }
            $scope.showOnly(data);
        }
    })

.controller('BasicDemoCtrl', function DemoCtrl($mdDialog) {
        var originatorEv;

        this.openMenu = function($mdMenu, ev) {
            originatorEv = ev;
            $mdMenu.open(ev);
        };

        this.notificationsEnabled = true;
        this.toggleNotifications = function() {
            this.notificationsEnabled = !this.notificationsEnabled;
        };

        this.redial = function() {
            $mdDialog.show(
                $mdDialog.alert()
                .targetEvent(originatorEv)
                .clickOutsideToClose(true)
                .parent('body')
                .title('Suddenly, a redial')
                .textContent('You just called a friend; who told you the most amazing story. Have a cookie!')
                .ok('That was easy')
            );

            originatorEv = null;
        };

        this.checkVoicemail = function() {};
    })
    .controller('RightCtrl', function($scope, $timeout, $mdSidenav, $log) {
        $scope.close = function() {
            // Component lookup should always be available since we are not using `ng-if`
            $mdSidenav('right').close()
                .then(function() {
                    $log.debug("close RIGHT is done");
                });

        };

        $scope.notifications = [{
            "name": "James",
            "status": "Disable",
            "image": "../app/assets/img/img1.png",
            "email": "james@gmail.com"
        }, {
            "name": "Mark",
            "status": "Disable",
            "image": "../app/assets/img/img1.png",
            "email": "Mark@gmail.com"
        }, {
            "name": "Liza",
            "status": "Enable",
            "image": "../app/assets/img/img6.png",
            "email": "Liza@gmail.com"
        }, {
            "name": "Smiley",
            "status": "Disable",
            "image": "../app/assets/img/img6.png",
            "email": "Smiley@gmail.com"
        }, {
            "name": "Ron",
            "status": "Disable",
            "image": "../app/assets/img/img1.png",
            "email": "Ron@gmail.com"
        }, {
            "name": "James",
            "status": "Enable",
            "image": "../app/assets/img/img1.png",
            "email": "james@gmail.com"
        }, {
            "name": "James",
            "status": "Enable",
            "image": "../app/assets/img/img1.png",
            "email": "james@gmail.com"
        }, {
            "name": "Niti",
            "status": "Disable",
            "image": "../app/assets/img/img6.png",
            "email": "Niti@gmail.com"
        }, {
            "name": "Jack",
            "status": "Disable",
            "image": "../app/assets/img/img1.png",
            "email": "Jack@gmail.com"
        }, {
            "name": "Lazzy",
            "status": "Disable",
            "image": "../app/assets/img/img6.png",
            "email": "Lazzy@gmail.com"
        }, {
            "name": "Bravo",
            "status": "Enable",
            "image": "../app/assets/img/img1.png",
            "email": "Bravo@gmail.com"
        }, {
            "name": "Nisar",
            "status": "Enable",
            "image": "../app/assets/img/img1.png",
            "email": "Nisar@yahoo.com"
        }]
    });