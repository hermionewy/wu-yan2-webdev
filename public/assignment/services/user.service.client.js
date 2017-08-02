/**
 * Created by wuyan on 7/11/17.
 */
(function () {
    angular.module('WAM')
        .factory('userService', userService);
    
    function userService($http) {
        var users=
            [
                {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
                {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley", email: "bob@gmail.com"  },
                {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
                {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
            ];

        var api={
            findUserById: findUserById,
            findUserByCredentials: findUserByCredentials,
            findUserByUsername:findUserByUsername,
            createUser:createUser,
            updateUser: updateUser,
            deleteUser: deleteUser
        };

        return api;
        function deleteUser(userId) {
            var url="/api/assignment/user/"+ userId;
            return $http.delete(url)
                .then(renderUser);
            function renderUser(response) {
                return response.data;
            }
        }
        function updateUser(userId, user) {
            var url="/api/assignment/user/"+ userId;
            return $http.put(url, user)
                .then(renderUser);
            function renderUser(response) {
                return response.data;
            }
        }
        function createUser(user) {
            var url="/api/assignment/user";
            return $http.post(url, user)
                .then(function (response) {
                    console.log(response.data);
                    return response.data;
                });
            // user._id=(new Date()).getTime()+'';
            // user.created = new Date();
            // users.push(user);
            // return user;
        }
        
        function findUserByUsername(username) {
            var url="/api/assignment/user?username="+ username;
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                });
            // var user = users.find(function (user) {
            //     return user.username === username;
            // });
            // if(typeof user ==='undefined'){
            //     return null;
            // }
            // return user;
        }

        function findUserById(userId) {
            var url="/api/assignment/user/"+ userId;
            return $http.get(url)
                .then(renderUser);

            function renderUser(response) {
                return response.data;
            }
            // return null;
        }

        function findUserByCredentials(username, password) {
            var url="/api/assignment/user?username="+ username+"&password="+password;
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                });

        }
    }
})();