/**
 * Created by wuyan on 7/9/17.
 */
(function () {
    angular.module("WAM")
        .controller("loginController", loginController);

    function loginController($location, userService) {
        var model = this;

        model.login= login; //event handler

            function login(username, password) {

            var found= userService.findUserByCredentials(username,password);

            if(found != null){
                model.message = "Welcome, "+username;
                $location.url('/user/'+ found._id);
            }else {
                model.message = "Sorry, "+username + " not found!";
            }
        }

    }
})();