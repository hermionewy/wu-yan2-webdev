/**
 * Created by wuyan on 7/31/17.
 */

(function () {
    $(function() {
       var searchByTitleBtn = $("#searchBytitleButton");
       var searchByTitleFld = $("#searchByTitleField");

       searchByTitleBtn.click(searchByTitle);
       function searchByTitle() {
           var movieTitle= searchByTitleFld.val();
           var url ="";
           $.ajax({
               url: url,
               success: renderMovies,
               error: function () {
                   alert("oops");
               }
           }); //send http request

           function renderMovies(response) {
               //console.log(response);
               var table=$("<table>");
               table.addClass("table");

               for(var m in response.search){
                   var movie=response.search[m];
                   var tr =$("<tr>");
                   var td=$("<td>");
                   td.append(movie.title);
                   tr.append(td);
                   table.append(tr);
               }
           }
       }
    });
})();