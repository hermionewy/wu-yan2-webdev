/**
 * Created by wuyan on 7/9/17.
 */
(function () {
    angular.module('WAM')
           .config(configuration);

    function configuration($routeProvider) {
        $routeProvider
            .when('/hello',{
                template: '<h3>hello</h3>'
            })
            .when('/home',{
                templateUrl: 'home.html'
            })
            .when('/login',{
                templateUrl: 'view/user/templates/login.view.client.html',
                controller: 'loginController',
                controllerAs: 'model'
            })
            .when('/register',{
                templateUrl: 'view/user/templates/register.view.client.html',
                controller:'registerController',
                controllerAs: 'model'
            })
            .when('/user/:userId',{
                templateUrl: 'view/user/templates/profile.view.client.html',
                controller: 'profileController',
                controllerAs: 'model'
            })
            .when('/user/:userId/website',{
                templateUrl: 'view/website/templates/website-list.view.client.html',
                controller: 'websiteListController',
                controllerAs: 'model'
            })
            .when('/user/:userId/website/new',{
                templateUrl: 'view/website/templates/website-new.view.client.html',
                controller: 'websiteNewController',
                controllerAs: 'model'
            })
            .when('/user/:userId/website/:websiteId',{
                templateUrl: 'view/website/templates/website-edit.view.client.html',
                controller: 'websiteEditController',
                controllerAs: 'model'
            })
            .when('/user/:userId/website/:websiteId/page/:pageId/widget',{
                templateUrl: 'view/widget/templates/widget-list.view.client.html',
                controller: 'widgetListController',
                controllerAs: 'model'
            })
            .when('/user/:userId/website/:websiteId/page',{
                templateUrl: 'view/page/templates/page-list.view.client.html',
                controller: 'pageListController',
                controllerAs: 'model'
            });
    }

})();