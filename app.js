$(function(){

  function addGoogleFont(fontName) {
    fontName.toUpperCase();
    $("head").append("<link href='https://fonts.googleapis.com/css?family=" + fontName + "' rel='stylesheet' type='text/css'>");
    var headerFont = "<span class='headerChange'>" + fontName + "</span>"
    var textFont = "<p class='exampleText'>Celebrate success right, the only way, apple. I told you all this before, when you have a swimming pool, do not use chlorine, use salt water, the healing, salt water is the healing. Look at the sunset, life is amazing, life is beautiful, life is what you make it. In life you have to take the trash out, if you have trash in your life, take it out, throw it away, get rid of it, major key. You do know, you do know that they don’t want you to have lunch. I’m keeping it real with you, so what you going do is have lunch. We the best.</p><p class='exampleText'>To be successful you’ve got to work hard, to make history, simple, you’ve got to make it. Egg whites, turkey sausage, wheat toast, water. Of course they don’t want us to eat our breakfast, so we are going to enjoy our breakfast. Always remember in the jungle there’s a lot of they in there, after you overcome they, you will make it to paradise. You see the hedges, how I got it shaped up? It’s important to shape up your hedges, it’s like getting a haircut, stay fresh. They don’t want us to win.</p><p class='exampleText'>In life there will be road blocks but we will over come it. The ladies always say Khaled you smell good, I use no cologne. Cocoa butter is the key. Special cloth alert. In life there will be road blocks but we will over come it. They don’t want us to eat. You see that bamboo behind me though, you see that bamboo? Ain’t nothin’ like bamboo. Bless up. You see the hedges, how I got it shaped up? It’s important to shape up your hedges, it’s like getting a haircut, stay fresh.</p>"
    $(".exampleHeader").html("Here's what  " + headerFont + "  looks like in action!");
    $('.textShow').html(textFont);
    $(".headerChange").css('font-family', fontName);
    $(".exampleText").css('font-family', fontName);
  }

  $('#submitFont').on('click', function(event){
    event.preventDefault();
    var found = false;
    var font = $('#fontInput').val().trim().toLowerCase();
    $('#fontInput').val('');
    $.ajax({
    url: `https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyADMWRN_nOc1sRCdmybHHgX82pNdSWYh9I`,
    type: 'GET'
    }).done(function(response){
      for (var i = 0; i < response.items.length; i++) {
        if (font === response.items[i].family.toLowerCase()) {
          addGoogleFont(response.items[i].family);
          found = true;
        }
        if(!found) {
          $(".exampleHeader").html("Sorry, but we couldn't find that font!");
          $(".exampleText").html('');
        }
  };
  })
})
})
