/**
 * Created by wuyan on 7/13/17.
 */
(function () {
    angular.module("WAM")
        .controller("widgetListController", widgetListController);

    function widgetListController($sce) {
        var model = this;

        var widgets = [
            { "_id": "123", "widgetType": "HEADING", "pageId": "321", "size": 2, "text": "GIZMODO"},
            { "_id": "234", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem Ipsom"},
            { "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%",
                "url": "http://lorempixel.com/400/200/"},
            { "_id": "456", "widgetType": "HTML", "pageId": "321", "text": '<p>Samsung’s refurbished Galaxy Note 7, aka the <a href="http://gizmodo.com/samsung-wants-to-sell-refurbished-note-7s-with-the-sill-1796483768" rel="nofollow">Note Fan Edition</a>, was announced last month. But instead of excitement, everyone had one question in mind: Will it also explode?<span class="read-more-placeholder"></span></p>'},
            { "_id": "567", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
            { "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%",
                "url": "https://youtu.be/AM2Ivdi9c4E" },
            { "_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"}
        ];
        model.widgets = widgets;
        model.trust = trust;
        model.getYoutubeEmbedUrl=getYoutubeEmbedUrl;
        model.widgetUrl=widgetUrl;

        function widgetUrl(widget) {
            var url='view/widget/templates/widget-'+widget.widgetType.toLowerCase()+'.view.client.html';
            return url;
        }
        function getYoutubeEmbedUrl(linkUrl) {
            var embedUrl='https://www.youtube.com/embed/';
            var linkUrlParts = linkUrl.split('/');
            embedUrl+=linkUrlParts[linkUrlParts.length-1];
            return $sce.trustAsResourceUrl(embedUrl);
        }
        function trust(html) {
            //scrubbing the html remove scripts
            return $sce.trustAsHtml(html);
        }

    }
})();