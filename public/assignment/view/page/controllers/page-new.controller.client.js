/**
 * Created by wuyan on 7/18/17.
 */
(function () {
    angular.module('WAM')
        .controller('pageNewController',pageNewController);

    function pageNewController($routeParams, $location, pageService) {
        var model = this;

        function init() {
            model.userId = $routeParams['userId'];
            model.websiteId = $routeParams['websiteId'];
            model.pages = pageService.findPageByWebsiteId(model.websiteId);
            model.createPage= createPage;
        }
        init();

        function createPage(page) {
            console.log(page);
            // page.websiteId= model.websiteId;
            // pageService.createPage(page);
            // $location.url('/user/'+model.userId+ '/website/'+model.websiteId +'/page');
        }


    }
})();
