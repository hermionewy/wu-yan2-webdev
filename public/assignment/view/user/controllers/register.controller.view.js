/**
 * Created by wuyan on 7/9/17.
 */
(function () {
    angular.module("WAM")
        .controller("registerController", registerController);

    function registerController($location, userService) {
        var model = this;

        model.register= register; //event handler

            function register(username, password, password2) {
                if(username === null || typeof username === 'undefined'){
                    model.error = 'Username is required';
                    return;
                }
                if(password!== password2 || password === null || typeof password==='undefined'){
                    model.error("Passwords must match!");
                    return;
                }

                var found= userService.findUserByUsername(username);

                if(found !== null){
                    model.error = "Sorry, "+username +" is taken.";

                }else {
                    var newUser = {
                        username: username,
                        password: password
                    };
                    newUser = userService.createUser(newUser);
                    $location.url('/user/'+ newUser._id);
            }
        }

    }
})();