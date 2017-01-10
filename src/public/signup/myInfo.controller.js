(function () {
"use strict";
angular.module('public')
.controller ("myInfoController", MyinfoController);

MyinfoController.$inject = ['MenuService','UserInfoService'];
function MyinfoController(MenuService,UserInfoService) {
var $ctrl = this;
 $ctrl.completed = false;
 $ctrl.confirmation_message = "";
 $ctrl.submit = function () {
   console.log ("Invoking Menu items for ");
   console.log ($ctrl.user.dish);
   $ctrl.validation = false;
   $ctrl.confirmation_message = '';
  var prom = MenuService.getMenuItems($ctrl.user.dish);
  prom.then(function (data) {
      $ctrl.completed = true;
      if (data.menu_items.length > 0) {
        $ctrl.validation = true;
        if ( UserInfoService.saveUserdata($ctrl.user,data.menu_items)) {
          $ctrl.confirmation_message= 'Thank You! Your information has been saved.';
        } else {
          $ctrl.confirmation_message= 'We are sorry! Errors occurred. Your information has NOT been saved!';
        }
      } else {
        $ctrl.validation = false;
      }
      console.log ("Returned data:");
      console.log (data);
  }, function(reason) {
    $ctrl.completed = true;
    $ctrl.reason = reason;
    $ctrl.validation = false;
    console.log (reason);
  })
};

}
})();
