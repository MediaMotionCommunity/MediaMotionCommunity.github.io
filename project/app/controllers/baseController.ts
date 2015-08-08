/**
 * Created by maxime on 10/01/2015.
 */
/// <reference path="../../assets/typings/angular.d.ts" />

class BaseController {
    constructor($rootScope: ng.IScope) {
        $rootScope['isErrorPage'] = false;
    }
}