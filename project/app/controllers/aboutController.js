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
var AboutController = (function (_super) {
    __extends(AboutController, _super);
    function AboutController($rootScope, $scope, translationService) {
        _super.call(this, $rootScope);
        $rootScope['initTemplate'] = this.initTemplate;
        translationService.getTranslation($scope, 'about');
    }
    AboutController.prototype.initTemplate = function () {
        init_Button();
        init_TeamSlider();
        init_Timeline();
    };
    return AboutController;
})(BaseController);
application.application.controller('aboutController', ['$rootScope', '$scope', 'translationService', AboutController]);
//# sourceMappingURL=aboutController.js.map