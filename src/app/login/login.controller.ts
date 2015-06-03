/// <reference path="../../../.tmp/typings/tsd.d.ts" />

/// <reference path="../index" />

module typescriptAngular {


  export class LoginCtrl {
    
    public static name = 'LoginCtrl';
    public static $inject = ['$location', '$rootScope', '$http'];

    public loginId: string;
    public password: string;

    constructor (
      private $location: ng.ILocationService,
      private $rootScope: ng.IRootScopeService,
      private $http: ng.IHttpService) {
      
//      $http.defaults.useXDomain = true;
      $http<any>({
        method: 'POST',
        url: '/api/things/1234',
//        headers: {
//          'Content-Type': 'application/json'
//        },
        data: {
          "text": "Hyperspeed jet",
          "id": "1"
        }
      })
      .success((data: any, status: number) => {
        alert(data);
      });
//      .error(
//        (data) => alert(data)
//      );
    }

    login(): void {
      console.log('id:' + this.loginId + ', passowrd:' + this.password);
      this.$rootScope.$broadcast('foo:fire', {title: 'hello'});
      // login process
//      this.$location.path('/list');
    }
  }
  
  angular.module('typescriptAngular').controller(LoginCtrl.name, LoginCtrl);
}
