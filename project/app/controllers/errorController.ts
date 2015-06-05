/**
 * Created by maxime on 10/01/2015.
 */

/// <reference path="BaseController.ts" />
/// <reference path="../Application.d.ts" />
 /// <reference path="../services/translationService.ts" />

class ErrorController extends BaseController {
    constructor($rootScope: ng.IScope, $scope: ng.IScope, translationService: TranslationService) {
        super($rootScope);
        $rootScope['isErrorPage'] = true;
        $rootScope['initTemplate'] = this.initTemplate;
        translationService.getTranslation($scope, 'error');
    }

    private initTemplate() {
    }
}

application.application.controller('errorController', ['$rootScope', '$scope', 'translationService', ErrorController]);