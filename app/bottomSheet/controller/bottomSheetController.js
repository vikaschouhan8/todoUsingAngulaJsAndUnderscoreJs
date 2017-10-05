angular.module("todoApp")
.config(function($mdIconProvider) {
    $mdIconProvider
      .icon('share-arrow', 'assets/img/icons/image.svg', 24)
      .icon('upload', 'assets/img/icons/image.svg', 24)
      .icon('copy', 'assets/img/icons/image.svg', 24)
      .icon('print', 'assets/img/icons/image.svg', 24)
      .icon('hangout', 'assets/img/icons/image.svg', 24)
      .icon('mail', 'assets/img/icons/image.svg', 24)
      .icon('message', 'assets/img/icons/image.svg', 24)
      .icon('copy2', 'assets/img/icons/image.svg', 24)
      .icon('facebook', 'assets/img/icons/image.svg', 24)
      .icon('twitter', 'assets/img/icons/image.svg', 24);
  })
.controller('BottomSheetController', function($scope, $timeout, $mdBottomSheet, $mdToast) {
  $scope.alert = '';

  $scope.showGridBottomSheet = function() {
    $scope.alert = '';
    $mdBottomSheet.show({
      templateUrl: '../view/bottomSheet.html',
      controller: 'GridBottomSheetCtrl',
      clickOutsideToClose: false
    }).then(function(clickedItem) {
      $mdToast.show(
            $mdToast.simple()
              .textContent(clickedItem['name'] + ' clicked!')
              .position('top right')
              .hideDelay(1500)
          );
    }).catch(function(error) {
      // User clicked outside or hit escape
    });
  };
})

.controller('GridBottomSheetCtrl', function($scope, $mdBottomSheet) {
  $scope.items = [
    { name: 'Hangout', icon: 'hangout' },
    { name: 'Mail', icon: 'mail' },
    { name: 'Message', icon: 'message' },
    { name: 'Copy', icon: 'copy2' },
    { name: 'Facebook', icon: 'facebook' },
    { name: 'Twitter', icon: 'twitter' },
  ];

  $scope.listItemClick = function($index) {
    var clickedItem = $scope.items[$index];
    $mdBottomSheet.hide(clickedItem);
  };
})
.run(function($templateRequest) {

    var urls = [
      'assets/img/icons/image.svg',
      'assets/img/icons/image.svg',
      'assets/img/icons/image.svg',
      'assets/img/icons/image.svg',
      'assets/img/icons/image.svg',
      'assets/img/icons/image.svg',
      'assets/img/icons/image.svg',
      'assets/img/icons/image.svg',
      'assets/img/icons/image.svg',
      'assets/img/icons/image.svg'
    ];

    angular.forEach(urls, function(url) {
      $templateRequest(url);
    });

});