/**
 * Created by wuyan on 7/9/17.
 */
(function () {
    angular.module("WAM")
        .controller("loginController", loginController);

    function loginController() {
        var model = this;
        var users=
            [
                {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
                {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
                {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
                {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
            ];

        model.login= login; //event handler

            function login(username, password) {
            var found=false;
            console.log("Login!!!"+username+","+password);
            for(var u in users){
                var user= users[u];
                if(user.username === username && user.password === password){
                    found=true;
                    break;
                }
            }
            if(found){
                model.message = "Welcome, "+username;
            }else {
                model.message = "Sorry, "+username + " not found!";
            }
        }

    }
})();