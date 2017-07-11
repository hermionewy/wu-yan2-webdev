/**
 * Created by wuyan on 7/9/17.
 */
(function () {
    angular.module('WAM',['ngRoute'])
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
                templateUrl: 'user/login.view.client.html',
                controller: 'loginController',
                controllerAs: 'model'
            })
            .when('/register',{
                templateUrl: 'user/register.view.client.html'
            })
            .when('/profile',{
                templateUrl: 'user/profile.view.client.html'
            });
    }

})();