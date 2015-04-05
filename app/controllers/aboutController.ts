/**
 * Created by maxime on 10/01/2015.
 */

/// <reference path="BaseController.ts" />
/// <reference path="../Application.d.ts" />
/// <reference path="../services/translationService.ts" />

class AboutController extends BaseController {
    constructor($rootScope: ng.IScope, $scope: ng.IScope, translationService: TranslationService) {
        super($rootScope);
        $rootScope['initTemplate'] = this.initTemplate;
        translationService.getTranslation($scope, 'about');
    }

    private initTemplate() {
        init_Button();
        init_TeamSlider();
        init_Timeline();
    }
}

application.application.controller('aboutController', ['$rootScope', '$scope', 'translationService', AboutController]);