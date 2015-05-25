/// <reference path="../../../../.tmp/typings/tsd.d.ts" />

/// <reference path="../../index.ts" />

module todoApp.todo.controller {

  export class ListCtrl {
    
    public static name: string = 'TodoListCtrl';

    constructor (private $location: ng.ILocationService, $timeout: ng.ITimeoutService) {
      $timeout(() => alert('hello list controller!!'), 0);
    }
  }
  
  angular.module('typescriptAngular').controller(ListCtrl.name, ListCtrl);
}
