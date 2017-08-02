/**
 * Created by wuyan on 7/31/17.
 */
(function () {
    angular
        .module("omdbAPP", [])
        .config(configuration);
        .controller("searchController",searchController)
        .controller("detailsController",detailsController)
        .service("movieService", movieService);

    function configuration($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl :"search.html",
                controller: "searchController",
                controllerAs: "model"
            })
            .when("/details/:imdbID",{
                templateUrl: "details.html",
                controller: "detailsController",
                controllerAs: "model"
            })
    }

    function searchController(movieSrvice){
        var model = this;
        model.searchMovieByTitle = searchMovieByTitle;

        function init() {

        }
        init();
        function searchMovieByTitle() {
            movieSrvice
                .searchMovieByTitle()
                .then(function (response) {
                    model.movies = response;
                });
        }

    }

    function detailsController($routeParams) {
        var model = this;
        model.imdbId = $routeParams.imdbId;
        function init() {
            movieService
                .searchMovieByImdbId(model.imdbId)
                .then(renderMovie);
        }
        function renderMovie(response) {
            return response;
        }
    }

    function movieService($http) {
        this.searchMovieByTitle = searchMovieByTitle;
        this.searchMovieByImdbId = searchMovieByImdbId;
        function searchMovieByTitle(movieTitle) {
            var url = "";
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                })

        }
        function searchMovieByImdbId(movieId) {

        }

    }
})();