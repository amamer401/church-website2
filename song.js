$(document).ready(function () {

     $(".search-results").submit(function (event) {
         event.preventDefault();
         getResults($("#query").val());
     });
     
     function getResults(query) { 
         $.getJSON("https://www.googleapis.com/youtube/v3/search", {
                 part: "snippet", 
                 maxResults: 10,
                 key: "AIzaSyCclIq-RF7zhCJ_JnoXJBLdGvz-v2nzCB0",
                 q: query,
                 type: "video"
             },

             function (data) {
            
                 console.log(data);

                 if (data.pageInfo.totalResults == 0) {
                     alert("No videos found!");
                 }

                 showResults(data.items); 
             }
         );
     }
     
     function showResults(videos) {

        
         var buildResultsList = "";

         $.each(videos, function (videosKey, videosValue) {
             buildResultsList += "<li>";
             buildResultsList += "<p>" + videosValue.snippet.title + "</p>";
             buildResultsList += "<a href='https://www.youtube.com/watch?v=" + videosValue.id.videoId + "' target='_blank'>";
             buildResultsList += "<img src='" + videosValue.snippet.thumbnails.high.url + "'/>";
             buildResultsList += "</a>";
             buildResultsList += "</li>";
         });

         $("#search-results ul").html(buildResultsList);
     }
 });