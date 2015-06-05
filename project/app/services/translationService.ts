/**
 * Created by maxime on 10/01/2015.
 */

/// <reference path="../Application.d.ts" />

class TranslationService {
    constructor($resource:any, $window:ng.IWindowService, $rootScope: ng.IScope) {
        this.language = $window.navigator.userLanguage || $window.navigator.language;
        this.$resource = $resource;
        this.$rootScope = $rootScope;
        this.data = {};
    }

    public loadAngularLang = () => {
        var lang = "en-UK";
        $.getScript("assets/external/angular/i18n/angular-locale_" + this.language + ".js");
        if (this.language.toLowerCase().indexOf("fr") >= 0) {
            lang = "fr-FR";
        }
        var languageFilePath = "assets/translation/translation_" + lang + ".json";
        this.promise = this.$resource(languageFilePath).get((data: any) => {
            this.data = data;
            this.$rootScope['globalTranslation'] = data['global'];
        });
    }

    public getTranslation = ($scope: any, pageName?: string): any => {
        this.promise.$promise.then(() => {
           if (typeof this.data[pageName] !== 'undefined') {
               $scope['translation'] = this.data[pageName];
            }
        });
    }

    private promise: any;
    private $rootScope: ng.IScope;
    private $resource: any;
    private language:string;
    private data: any;
}

application.application.service('translationService', ['$resource', '$window', '$rootScope', TranslationService]);
