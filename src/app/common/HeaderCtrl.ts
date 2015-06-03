/// <reference path="../../../.tmp/typings/tsd.d.ts" />

module typescriptAngular {
	
	export class HeaderCtrl {
		private title: string;
		constructor($rootScope: ng.IRootScopeService) {
			$rootScope.$on('foo:fire', (event, param) => {
				this.title = param.title;
			});
		}
	}
//	HeaderCtrl.$inject = ['$rootScope'];
	angular.module('typescriptAngular').controller('HeaderCtrl', HeaderCtrl);
}