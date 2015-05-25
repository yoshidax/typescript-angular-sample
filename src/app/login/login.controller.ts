/// <reference path="../../../.tmp/typings/tsd.d.ts" />

/// <reference path="../index" />

module typescriptAngular {

  export class LoginCtrl {
    
    public static name: string = 'LoginCtrl';

    private loginId: string;
    private password: string;

    constructor (private $location: ng.ILocationService) {
    }

    login(): void {
      console.log('id:' + this.loginId + ', passowrd:' + this.password);
      // login process
      this.$location.path('/list');
    }
  }
  
  angular.module('typescriptAngular').controller(LoginCtrl.name, LoginCtrl);
}
