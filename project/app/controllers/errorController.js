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
var ErrorController = (function (_super) {
    __extends(ErrorController, _super);
    function ErrorController($rootScope, $scope, translationService) {
        _super.call(this, $rootScope);
        $rootScope['isErrorPage'] = true;
        $rootScope['initTemplate'] = this.initTemplate;
        translationService.getTranslation($scope, 'error');
    }
    ErrorController.prototype.initTemplate = function () {
    };
    return ErrorController;
})(BaseController);
application.application.controller('errorController', ['$rootScope', '$scope', 'translationService', ErrorController]);
//# sourceMappingURL=errorController.js.map