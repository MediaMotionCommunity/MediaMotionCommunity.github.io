/**
 * Created by maxime on 10/01/2015.
 */

/// <reference path="BaseController.ts" />
/// <reference path="../Application.d.ts" />
/// <reference path="../services/translationService.ts" />


class HomeController extends BaseController {
    constructor($scope: ng.IScope, $rootScope: ng.IScope, translationService: TranslationService) {
        super($rootScope);
//        this.initTemplate();
        translationService.getTranslation($scope, 'home');
        $rootScope['initTemplate'] = this.initTemplate;
    }

    private initTemplate() {
        init_Button();

        init_ButtonInfo();

        init_Roundabout();

        init_DecoratedSlider();

        init_QoutationSlider();

        init_ServicesInfo();
    }
}

application.application.controller('homeController', ['$scope', '$rootScope', 'translationService', HomeController]);