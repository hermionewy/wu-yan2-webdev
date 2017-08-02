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

                userService
                    .findUserByUsername(username)
                    .then(function () {
                        model.error = "Sorry, "+username +" is taken.";
                    },
                        function () { //username is not found
                        var newUser = {
                            username: username,
                            password: password
                        };
                        return userService
                            .createUser(newUser);
                    })
                    .then(function (user) {
                        $location.url('/user/'+ user._id);
                    });

        }

    }
})();