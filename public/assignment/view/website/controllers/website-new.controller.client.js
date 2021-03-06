/**
 * Created by wuyan on 7/12/17.
 */
(function () {
    angular.module('WAM')
        .controller('websiteNewController',websiteNewController);

    function websiteNewController($routeParams, $location, websiteService) {
        var model = this;

        function init() {
            model.userId = $routeParams['userId'];
            model.createWebsite = createWebsite;
            model.websites = websiteService.findAllWebsitesForUser(model.userId);
        }
        init();


        function createWebsite(website) {
            website.developerId = model.userId;
            websiteService.createWebsite(website);
            $location.url('/user/'+model.userId+ '/website');
        }
    }
})();