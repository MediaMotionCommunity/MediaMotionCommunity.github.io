/**
 * Created by maxime on 10/01/2015.
 */
/// <reference path="../assets/typings/angular.d.ts" />
/// <reference path="controllers/BaseController.ts" />
/// <reference path="Application.d.ts" />
var ApplicationStarter = (function () {
    function ApplicationStarter() {
    }
    ApplicationStarter.prototype.initialisation = function () {
        this.application = angular.module('MediaMotionApplication', ['ui.router', 'ngCookies', 'ngResource']);
        this.templateConfig();
        this.routeInitilisation();
        this.runInitialisation();
    };
    ApplicationStarter.prototype.routeInitilisation = function () {
        this.application.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.when('', '/');
            $urlRouterProvider.otherwise("/404");
            $stateProvider.state('404', {
                url: '/404',
                templateUrl: 'views/404.html',
                data: { pageTitle: 'Not found' }
            }).state('home', {
                url: '/',
                templateUrl: 'views/home.html',
                data: { pageTitle: 'Home' }
            }).state('about', {
                url: '/about',
                templateUrl: 'views/about.html',
                data: { pageTitle: 'About Us' }
            }).state('howitworks', {
                url: '/howitworks',
                templateUrl: 'views/howitworks.html',
                data: { pageTitle: 'How it works' }
            });
        }]);
    };
    ApplicationStarter.prototype.runInitialisation = function () {
        this.application.run(function ($rootScope, $state, translationService, githubService) {
            $rootScope['isErrorPage'] = false;
            translationService['loadAngularLang']();
            githubService['initialisation']();
            var global_init = false;
            $rootScope.$on('$viewContentLoaded', function () {
                if (global_init) {
                    if (typeof $rootScope["initTemplate"] !== 'undefined') {
                        $rootScope["initTemplate"]();
                    }
                }
                else {
                    global_init = true;
                }
            });
        });
    };
    ApplicationStarter.prototype.templateConfig = function () {
        this.application.controller('appController', ['$scope', '$rootScope', function ($scope, $rootScope) {
        }]);
    };
    return ApplicationStarter;
})();
application = new ApplicationStarter();
application.initialisation();
//# sourceMappingURL=app.js.map