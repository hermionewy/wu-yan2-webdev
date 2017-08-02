/**
 * Created by wuyan on 7/12/17.
 */
(function () {
    angular.module("WAM")
        .service("websiteService", websiteService);

    function websiteService($http) {
        this.findAllWebsitesForUser = findAllWebsitesForUser;
        this.findWebsiteById = findWebsiteById;
        this.updateWebsite = updateWebsite;
        this.deleteWebsite = deleteWebsite;
        this.createWebsite = createWebsite;

        function createWebsite(website) {
            website._id= (new Date()).getTime()+'';
            websites.push(website);
        }
        function deleteWebsite(websiteId) {
            var website = findWebsiteById(websiteId);
            var index = websites.indexOf(website);
            websites.splice(index,1);
            return websites;
        }

        function updateWebsite(websiteId) {

        }
        
        function findWebsiteById(websiteId) {
            return websites.find(function (website) {
                return website._id === websiteId;
            })
        }
        
        function findAllWebsitesForUser(userId) {
            var url = '/api/assignment/user/'+userId+ '/website';
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                });
        }
    }


})();