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
var HowItWorksController = (function (_super) {
    __extends(HowItWorksController, _super);
    function HowItWorksController($rootScope, $scope, translationService) {
        _super.call(this, $rootScope);
        $rootScope['initTemplate'] = this.initTemplate;
        translationService.getTranslation($scope, 'howitworks');
    }
    HowItWorksController.prototype.initTemplate = function () {
        init_Button();
        $('.video__item').fitVids();
        init_QoutationSlider();
    };
    return HowItWorksController;
})(BaseController);
application.application.controller('howItWorksController', ['$rootScope', '$scope', 'translationService', HowItWorksController]);
//# sourceMappingURL=howitworksController.js.map