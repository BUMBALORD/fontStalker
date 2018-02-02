$(function(){

  function addGoogleFont(fontName) {
    fontName.toUpperCase();
    $("head").append("<link href='https://fonts.googleapis.com/css?family=" + fontName + "' rel='stylesheet' type='text/css'>");
    $(".exampleText").css('font-family', fontName);
    var headerFont = "<span class='headerChange'>" + fontName + "</span>"
    $(".exampleHeader").html("Here's what  " + headerFont + "  looks like in action!");
    $(".headerChange").css('font-family', fontName);
  }

  $('#submitFont').on('click', function(event){
    event.preventDefault();
    var font = $('#fontInput').val().trim().toLowerCase();
    console.log(font + "hi");
    $.ajax({
    url: `https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyADMWRN_nOc1sRCdmybHHgX82pNdSWYh9I`,
    type: 'GET'
    }).done(function(response){
      for (var i = 0; i < response.items.length; i++) {
        if (font === response.items[i].family.toLowerCase()) {
          addGoogleFont(response.items[i].family);
        }
  };
  })
})
})
