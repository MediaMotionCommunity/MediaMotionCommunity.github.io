/**
 * Created by maxime on 10/01/2015.
 */
/// <reference path="../Application.d.ts" />
var TranslationService = (function () {
    function TranslationService($resource, $window, $rootScope) {
        var _this = this;
        this.loadAngularLang = function () {
            var lang = "en-UK";
            $.getScript("assets/external/angular/i18n/angular-locale_" + _this.language + ".js");
            if (_this.language.toLowerCase().indexOf("fr") >= 0) {
                lang = "fr-FR";
            }
            var languageFilePath = "assets/translation/translation_" + lang + ".json";
            _this.promise = _this.$resource(languageFilePath).get(function (data) {
                _this.data = data;
                _this.$rootScope['globalTranslation'] = data['global'];
            });
        };
        this.getTranslation = function ($scope, pageName) {
            _this.promise.$promise.then(function () {
                if (typeof _this.data[pageName] !== 'undefined') {
                    $scope['translation'] = _this.data[pageName];
                }
            });
        };
        this.language = $window.navigator.userLanguage || $window.navigator.language;
        this.$resource = $resource;
        this.$rootScope = $rootScope;
        this.data = {};
    }
    return TranslationService;
})();
application.application.service('translationService', ['$resource', '$window', '$rootScope', TranslationService]);
//# sourceMappingURL=translationService.js.map