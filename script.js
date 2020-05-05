
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
    var regExp= new RegExp("^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$");
    return regExp.test(mail);
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