/**
 * Created by maxime on 10/01/2015.
 */

/// <reference path="BaseController.ts" />
/// <reference path="../Application.d.ts" />
/// <reference path="../services/translationService.ts" />

class HowItWorksController extends BaseController {
    constructor($rootScope: ng.IScope, $scope: ng.IScope, translationService: TranslationService) {
        super($rootScope);
        $rootScope['initTemplate'] = this.initTemplate;
        translationService.getTranslation($scope, 'howitworks');
    }

    private initTemplate() {
        init_Button();
        $('.video__item').fitVids();
        init_QoutationSlider();
    }
}

application.application.controller('howItWorksController', ['$rootScope', '$scope', 'translationService', HowItWorksController]);