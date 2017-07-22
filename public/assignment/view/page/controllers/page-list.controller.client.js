/**
 * Created by wuyan on 7/18/17.
 */
(function () {
    angular.module('WAM')
        .controller('pageListController',pageListController);

    function pageListController($routeParams, pageService) {
        var model = this;

        function init() {
            model.userId = $routeParams['userId'];
            model.websiteId = $routeParams['websiteId'];
            model.pages = pageService.findPageByWebsiteId(model.websiteId);
        }
        init();


    }
})();