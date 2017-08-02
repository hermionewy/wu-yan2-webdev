/**
 * Created by wuyan on 7/12/17.
 */
(function () {
    angular.module("WAM")
        .service("pageService", pageService);

    function pageService() {

        // createPage(websiteId, page) - adds the page parameter instance to the local pages array. The new page's websiteId is set to the websiteId parameter
        // findPageByWebsiteId(websiteId) - retrieves the pages in local pages array whose websiteId matches the parameter websiteId
        // findPageById(pageId) - retrieves the page in local pages array whose _id matches the pageId parameter
        // updatePage(pageId, page) - updates the page in local pages array whose _id matches the pageId parameter
        // deletePage(pageId) - removes the page from local pages array whose _id matches the pageId parameter

        this.findPageByWebsiteId = findPageByWebsiteId;
        this.findPageById = findPageById;
        this.updatePage = updatePage;
        this.deletePage = deletePage;
        this.createPage = createPage;


        var pages = [
                { "_id": "321", "name": "Post 1", "websiteId": "456", "description": "Lorem" },
                { "_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem" },
                { "_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem" },
                { "_id": "545", "name": "Post 4", "websiteId": "567", "description": "Lorem" },
                { "_id": "546", "name": "Post 5", "websiteId": "567", "description": "Lorem" },
                { "_id": "547", "name": "Post 6", "websiteId": "123", "description": "Lorem" }
            ];
        function createPage(page) {
            page._id= (new Date()).getTime()+'';
            pages.push(page);
        }
        function deletePage(websiteId) {
            var page = findPageByWebsiteId(websiteId);
            var index = pages.indexOf(page);
            pages.splice(index,1);
            return pages;
        }

        function updatePage(pageId, page) {
            var foundPage = findPageById(pageId);
            var index = pages.indexOf(foundPage);
            pages.splice(index,0, page);
            return pages;

        }
        
        function findPageById(pageId) {
            return pages.find(function (page) {
                return page._id === pageId;
            })
        }
        
        function findPageByWebsiteId(websiteId) {
            var results =[];
            for(var v in pages){
                if(pages[v].websiteId === websiteId){
                    results.push(pages[v]);
                }
            }
            return results;
        }
    }


})();