/**
 * Created by maxime on 10/01/2015.
 */
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/// <reference path="BaseController.ts" />
/// <reference path="../Application.d.ts" />
/// <reference path="../services/translationService.ts" />
var HomeController = (function (_super) {
    __extends(HomeController, _super);
    function HomeController($scope, $rootScope, translationService) {
        _super.call(this, $rootScope);
        //        this.initTemplate();
        translationService.getTranslation($scope, 'home');
        $rootScope['initTemplate'] = this.initTemplate;
    }
    HomeController.prototype.initTemplate = function () {
        init_Button();
        init_ButtonInfo();
        init_Roundabout();
        init_DecoratedSlider();
        init_QoutationSlider();
        init_ServicesInfo();
    };
    return HomeController;
})(BaseController);
application.application.controller('homeController', ['$scope', '$rootScope', 'translationService', HomeController]);
//# sourceMappingURL=homeController.js.map