/**
 * Created by maxime on 11/01/2015.
 */

/// <reference path="../Application.d.ts" />

class GithubService {
    constructor($http:ng.IHttpService, $rootScope:ng.IScope) {
        this.$http = $http;
        this.$rootScope = $rootScope;
        this.getGibthubInformation();
    }

    private getGibthubInformation = () => {
        var informations = {};
        informations['html_url'] = 'https://github.com/MediaMotionCommunity/MediaMotion';
        this.$http.get(this.url).success((data_global:any) => {
            this.global_data = data_global;
            informations['html_url'] = data_global['html_url'];
            this.$http.get('https://api.github.com/repos/MediaMotionCommunity/MediaMotion/branches').success((branche_data: any) => {
                informations['branche_count'] = branche_data.length;
                    this.$http.get(data_global['contributors_url']).success((contributor_data:any) => {
                        informations['contributor_count'] = contributor_data.length;
                        this.$http.get('https://api.github.com/repos/MediaMotionCommunity/MediaMotion/releases').success((release_data: any) => {
                            this.releases_data = release_data;
                            console.log(release_data);
                            informations['release_count'] = release_data.length;
                            this.$http.get('https://api.github.com/repos/MediaMotionCommunity/MediaMotion/stats/commit_activity').success((commit_activity: any) => {
                                var commit_count = 0;
                                for (var i = 0; i < commit_activity.length; i++) {
                                    commit_count += commit_activity[i]['total'];
                                }
                                informations['commit_count'] = commit_count;
                                this.$rootScope['git'] = informations;
                                console.log(informations);
                            });
                        });
                    });
            });
        });
    }

    public initialisation = () => {
    }

    private global_data: any;
    private releases_data: any;
    private data:any;
    private url:string = "https://api.github.com/repos/MediaMotionCommunity/MediaMotion";
    private $http:ng.IHttpService;
    private $rootScope:ng.IScope;
}

application.application.service('githubService', ['$http', '$rootScope', GithubService]);