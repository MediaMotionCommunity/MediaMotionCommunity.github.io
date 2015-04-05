/**
 * Created by maxime on 11/01/2015.
 */
/// <reference path="../Application.d.ts" />
application.application.directive('ngSpinnerBar', ['$rootScope', function ($rootScope) {
    return {
        link: function (scope, element, attrs) {
            // by defult hide the spinner bar
            element.addClass('hide'); // hide spinner bar by default
            // display the spinner bar whenever the route changes(the content part started loading)
            $rootScope.$on('$stateChangeStart', function () {
                element.removeClass('hide'); // show spinner bar
                $('body').addClass('half-page-on-load');
            });
            // hide the spinner bar on rounte change success(after the content loaded)
            $rootScope.$on('$stateChangeSuccess', function () {
                element.addClass('hide'); // hide spinner bar
                $('body').removeClass('page-on-load').removeClass('half-page-on-load'); // remove page loading indicator
                //Layout.setSidebarMenuActiveLink('match'); // activate selected link in the main menu
                // auto scorll to page top
                setTimeout(function () {
                    $('body,html').animate({
                        scrollTop: 0
                    }, 800);
                    //                    Metronic.scrollTop(); // scroll to the top on content load
                }, 100);
            });
            // handle errors
            $rootScope.$on('$stateNotFound', function () {
                element.addClass('hide'); // hide spinner bar
            });
            // handle errors
            $rootScope.$on('$stateChangeError', function () {
                element.addClass('hide'); // hide spinner bar
            });
        }
    };
}]);
//# sourceMappingURL=spinnerBar.js.map