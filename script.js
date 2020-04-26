
$(document).ready(function(){
   
$("#buttonPrint").click(function(){
    
    var Nome = $("#Nome").val();
    var Citta = $("#Citta").val();
    var Mail = $("#Mail").val();
    var CheckPrivacy = $("#checkPrivacy").is(":checked");
    var Telefono= $("#Telefono").val();

    //dummy validation
    if(Nome === "" || Citta === "" || Mail === "" || CheckPrivacy === false){
        //doNothing: input are not ok
    }
    else
    {
        //fuck This Shiiiiiiiiiiiiiiiiit
        event.preventDefault();
        ajaxCalls();

        console.log("redirect to new page");
 
        window.location.replace("contacts.html");
     
       
    }

});

function ajaxCalls(){
    $.ajax({
        url: 'https://fathomless-headland-00945.herokuapp.com/sendMail',
        type: 'GET',
        dataType:'json',
        data: {
            Nome: $("#Nome").val(),
            Mail: $("#Mail").val(),
            Telefono: $("#Telefono").val(),
            Citta : $("#Citta").val()
        },
        success: function(data) {
        
            console.log('form submitted.' + data);
        },
        error: function(data){
            console.log(data);
        }
      });
}

});