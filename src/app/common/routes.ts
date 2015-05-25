/// <reference path="../../../.tmp/typings/tsd.d.ts" />

/// <reference path="../index" />
/// <reference path="../login/login.controller.ts" />
/// <reference path="../todo/controller/ListCtrl.ts" />

module typescriptAngular {
  
  // definition of namespace alias
  import todoListCtrl = todoApp.todo.controller.ListCtrl;
  
  // configuration of router
  function routes($routeProvider: ng.route.IRouteProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/login/login.html',
        controller: LoginCtrl.name
      })
      .when('/list', {
        templateUrl: 'app/todo/controller/list.html',
        controller: todoListCtrl.name
      })
      .otherwise({
        redirectTo: '/'
      });
  }
  
  angular.module('typescriptAngular').config(routes);
}
