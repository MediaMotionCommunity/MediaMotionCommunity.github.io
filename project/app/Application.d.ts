/**
 * Created by maxime on 11/01/2015.
 */

/// <reference path="../assets/typings/angular.d.ts" />

declare function init_Button(): any;
declare function init_ButtonInfo(): any;
declare function init_Roundabout(): any;
declare function init_DecoratedSlider(): any;
declare function init_QoutationSlider(): any;
declare function init_ServicesInfo(): any;
declare function init_TeamSlider(): any;
declare function init_Timeline(): any;

interface JQuery {
    fitVids(): any;
}

interface IApplicationStarter {
    initialisation();
    application: ng.IModule;
}

declare var application: IApplicationStarter;
