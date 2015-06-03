/// <reference path="../../../.tmp/typings/tsd.d.ts" />

module typescriptAngular {
	
	export class FooterCtrl {
		private title: string;
		constructor($rootScope: ng.IRootScopeService) {
			$rootScope.$on('foo:fire', (event, param) => {
				this.title = param.title;
			});
		}
	}
//	FooterCtrl.$inject = ['$rootScope'];
	angular.module('typescriptAngular').controller('FooterCtrl', FooterCtrl);
}