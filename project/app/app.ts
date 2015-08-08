/**
 * Created by maxime on 10/01/2015.
 */

/// <reference path="../assets/typings/angular.d.ts" />
/// <reference path="controllers/BaseController.ts" />
/// <reference path="Application.d.ts" />

class ApplicationStarter implements IApplicationStarter {
    constructor() {
    }

    public initialisation() {
        this.application = angular.module('MediaMotionApplication', ['ui.router', 'ngCookies', 'ngResource']);
        this.templateConfig();
        this.routeInitilisation();
        this.runInitialisation();
    }

    private routeInitilisation() {
        this.application.config(['$stateProvider', '$urlRouterProvider', ($stateProvider: any, $urlRouterProvider: any) => {
            $urlRouterProvider.when('', '/');
            $urlRouterProvider.otherwise("/404");
            $stateProvider
                .state('404', {
                    url: '/404',
                    templateUrl: 'views/404.html',
                    data: {pageTitle: 'Not found'}
                })
                .state('home', {
                    url: '/',
                    templateUrl: 'views/home.html',
                    data: {pageTitle: 'Home'}
                })
                .state('about', {
                    url: '/about',
                    templateUrl: 'views/about.html',
                    data: {pageTitle: 'About Us'}
                })
                .state('howitworks', {
                    url: '/howitworks',
                    templateUrl: 'views/howitworks.html',
                    data: {pageTitle: 'How it works'}
                });
        }]);
    }

    private runInitialisation() {
        this.application.run(($rootScope: ng.IScope, $state: any, translationService: any, githubService: any) => {
            $rootScope['isErrorPage'] = false;
            translationService['loadAngularLang']();
            githubService['initialisation']();
            var global_init = false;
            $rootScope.$on('$viewContentLoaded', () => {
                if (global_init) {
                    if (typeof $rootScope["initTemplate"] !== 'undefined') {
                        $rootScope["initTemplate"]();
                    }
                } else {
                    global_init = true;
                }
            });
        });
    }

    private templateConfig() {
        this.application.controller('appController', ['$scope', '$rootScope', ($scope: ng.IScope, $rootScope: ng.IScope) => {
        }])
    }

    public application: ng.IModule;
}

application = new ApplicationStarter();
application.initialisation();
