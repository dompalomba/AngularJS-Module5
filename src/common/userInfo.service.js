(function () {
"use strict";

angular.module('common')
.service('UserInfoService', UserInfoService);

UserInfoService.$inject = [];
function UserInfoService() {
  var service = this;

  service.saveUserdata= function (user, menu_items) {
    this.user = user;
    this.menu_items = menu_items;
    return true;
  };

  service.getUserdata= function () {
    return this.user;
  };
  service.getUserMenuItems= function () {
    return this.menu_items;
    }
}
}
)();
