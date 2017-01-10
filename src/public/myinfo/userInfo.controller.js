(function() {
  "use strict";
  angular.module('public')
  .controller ("userController", userController);

  userController.$inject = ['UserInfoService'];
  function userController (UserInfoService) {
    var $ctrl = this;
    $ctrl.user = UserInfoService.getUserdata();
    $ctrl.menu_items = UserInfoService.getUserMenuItems();
    if ($ctrl.user &&  $ctrl.menu_items)
      {$ctrl.registered = true}
    else
      {$ctrl.registered = false}
      console.log ($ctrl.user)
      conosole.log ($ctrl.confirmation_message)
  }

})();
