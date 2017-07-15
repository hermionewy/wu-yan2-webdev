/**
 * Created by wuyan on 7/12/17.
 */
(function () {
    angular.module('WAM')
        .controller('websiteListController',websiteListController);
    
    function websiteListController($routeParams, websiteService) {
        var model = this;

        function init() {
            model.userId = $routeParams['userId'];
            model.websites = websiteService.findAllWebsitesForUser(model.userId);
        }
        init();


    }
})();