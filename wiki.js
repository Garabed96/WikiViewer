/*EDITTS FIX AFTER
the result text is not visible after hovering precisely over the text itself.
the search box would look better centered [ and resize sideways]
white-red gradient do not fit unless you'd like to focus on the polish section :wink: - if you really want to use one, the 'top-bottom' fashion would be more 'eye-candy'/bla*/
$(document).ready(function(){
  $('a').css('text-decoration', 'none');
    $('a').css('color', 'white');

  // create function that when 'return' entered
  // stores html text into var, and use that var
  // inside url, ajax stores

  //register submit handler, for <form> element when document is ready
  // call "search()" function when form is submited
    $("#myForm").on("submit", search)
  // doc.ready.. stops here because it only needs to run when doc loaded
  });
      function search(event){
      // stops <form> from refreshing page and losing data.
        event.preventDefault();

     // $("#searchWord").click();

        // sets value when you search for a word.
              var theWord = $("#searchWord").val();

        // return a line under the search bar b/c of the div(id=result)
       // returns the word after (you searched for) under the search bar
   // $('#result').html('<p> You Searched for '+ theWord + '</p>');

        // debugging line
  console.log(theWord);


        // call wiki API here and pass the word to the api from here.
        wikiApi(theWord);
    }


function wikiApi(theWord){
  var url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search='+ theWord +'&limit=25&namespace=0&format=json' ;
    $.ajax( {
       url: url,
       dataType: 'jsonp',
       type: 'GET',
       async: false,
       success: function(data){
            var i;
         var outString = "";
         for(i=0;i<data[1].length;i++){
            outString += "<div class=results-container><li> <a style=display:inline-block target=_blank href=" + data[3][i] + ">" + data[1][i] + "<br>" + data[2][i] +"</a></li><br></div>" ;
         $('#output').html(outString);
         }
           },
        error: function (ajaxContext){
          alert(ajaxContext.responseText)
        }
         });
}
