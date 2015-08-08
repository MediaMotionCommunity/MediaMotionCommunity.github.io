/**
 * Created by maxime on 11/01/2015.
 */
/// <reference path="../Application.d.ts" />
var GithubService = (function () {
    function GithubService($http, $rootScope) {
        var _this = this;
        this.getGibthubInformation = function () {
            var informations = {};
            informations['html_url'] = 'https://github.com/MediaMotionCommunity/MediaMotion';
            _this.$http.get(_this.url).success(function (data_global) {
                _this.global_data = data_global;
                informations['html_url'] = data_global['html_url'];
                _this.$http.get('https://api.github.com/repos/MediaMotionCommunity/MediaMotion/branches').success(function (branche_data) {
                    informations['branche_count'] = branche_data.length;
                    _this.$http.get(data_global['contributors_url']).success(function (contributor_data) {
                        informations['contributor_count'] = contributor_data.length;
                        _this.$http.get('https://api.github.com/repos/MediaMotionCommunity/MediaMotion/releases').success(function (release_data) {
                            _this.releases_data = release_data;
                            console.log(release_data);
                            informations['release_count'] = release_data.length;
                            _this.$http.get('https://api.github.com/repos/MediaMotionCommunity/MediaMotion/stats/commit_activity').success(function (commit_activity) {
                                var commit_count = 0;
                                for (var i = 0; i < commit_activity.length; i++) {
                                    commit_count += commit_activity[i]['total'];
                                }
                                informations['commit_count'] = commit_count;
                                _this.$rootScope['git'] = informations;
                                console.log(informations);
                            });
                        });
                    });
                });
            });
        };
        this.initialisation = function () {
        };
        this.url = "https://api.github.com/repos/MediaMotionCommunity/MediaMotion";
        this.$http = $http;
        this.$rootScope = $rootScope;
        this.getGibthubInformation();
    }
    return GithubService;
})();
application.application.service('githubService', ['$http', '$rootScope', GithubService]);
//# sourceMappingURL=githubService.js.map