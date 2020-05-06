
        
        var stopPlayAt = 1657; // Stop play at time in seconds
        var stopPlayTimer;   // Reference to settimeout call
        var startAt =257;
        // This code loads the IFrame Player API code asynchronously.
        var tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName("script")[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      
        // This function creates an <iframe> (and YouTube player)
        // after the API code downloads.
        var player;


        function onYouTubeIframeAPIReady() {
          player = new YT.Player("player", {
            "height": "315",
            "width": "560",
            "videoId": "ln-CeHYkQvg",
            "playerVars": {
                start: startAt,
                rel:0
            },
            "events": {
              "onStateChange": onPlayerStateChange
            }
          });
        }
      

          // The API will call this function when the video player is ready.
        // This automatically starts the video playback when the player is loaded.

        
          // The API calls this function when the player's state changes.
          function onPlayerStateChange(event) {
            var time, rate, remainingTime;
            clearTimeout(stopPlayTimer);
            if (event.data == YT.PlayerState.PLAYING) {
              time = player.getCurrentTime();
              // Add .4 of a second to the time in case it's close to the current time
              // (The API kept returning ~9.7 when hitting play after stopping at 10s)
              if (time + .4 < stopPlayAt) {
                rate = player.getPlaybackRate();
                remainingTime = (stopPlayAt - time) / rate;
                stopPlayTimer = setTimeout(pauseVideo, remainingTime * 1000);
              }
            }
          }
          function pauseVideo() {
            player.pauseVideo();
          }


$(document).ready(function(){

$("#buttonPrint").click(function(){
    
    var Nome = $("#Nome").val();
    var Citta = $("#Citta").val();
    var Mail = $("#Mail").val();
    var CheckPrivacy = $("#checkPrivacy").is(":checked");
    var Telefono= $("#Telefono").val();
     
    //dummy validation
    if(Nome === "" || Citta === "" || CheckPrivacy === false)
    {
          
    }
    else
    {

    //validazioneMail
    var mailValida = validaMail(Mail);
    if(mailValida)
    {
        $("#Mail").removeClass("is-invalid");
        event.preventDefault();
        ajaxCalls(Nome,Citta,Mail,Telefono);
        goToNextPage();
    }  
     else
    {
        $("#Mail").addClass("is-invalid");
        return false;
    }
}

});


$("#buttonPrintBlu").click(function(){
    
    var Nome = $("#NomeBlu").val();
    var Citta = $("#CittaBlu").val();
    var Mail = $("#MailBlu").val();
    var CheckPrivacy = $("#checkPrivacyBlu").is(":checked");
    var Telefono= $("#TelefonoBlu").val();

    //dummy validation
    if(Nome === "" || Citta === "" || Mail === "" || CheckPrivacy === false){
        //doNothing: input are not ok
    }
    else
    {

   //validazioneMail
   var mailValida = validaMail(Mail);
   if(mailValida)
   {
       $("#MailBlu").removeClass("is-invalid");
       event.preventDefault();
       ajaxCalls(Nome,Citta,Mail,Telefono);
       goToNextPage();
   }  
    else
   {
       $("#MailBlu").addClass("is-invalid");
       return false;
   }
}


});


$('a.nav-link').on('shown.bs.tab', function(e) {
    var href = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(href).offset().top
    }, 'slow');
  });

function validaMail(mail){
    debugger;
    var regexp= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(regexp.test(mail)){
        return true;
    } else{
        return false;
    }
   
   
}

function goToNextPage(){
    setTimeout(function(){
        window.location.replace("contacts.html");
    }, 1000);
}


function ajaxCalls(nome,citta,mail,telefono){
    $.ajax({
        url: 'https://fathomless-headland-00945.herokuapp.com/sendMail',
        type: 'GET',
        dataType:'json',
        data: {
            Nome: nome,
            Mail: mail,
            Telefono: telefono,
            Citta : citta
        },
        success: function(data) {
        
            console.log('form submitted.' + data);
        },
       
        error: function(data){
            console.log(data);
        },
    
      });
}

});