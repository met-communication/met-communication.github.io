
$(document).ready(function(){
   
$("#buttonPrint").click(function(){
    
    var Nome = $("#Nome").val();
    var Citta = $("#Citta").val();
    var Mail = $("#Mail").val();
    var CheckPrivacy = $("#checkPrivacy").is(":checked");

    //dummy validation
    if(Nome === "" || Citta === "" || Mail === "" || CheckPrivacy === false){
        //doNothing: input are not ok
    }
    else
    {
        //fuck This Shiiiiiiiiiiiiiiiiit
        event.preventDefault();

        console.log("redirect to new page");
        debugger;
        window.location.replace("contacts.html");
        debugger;
       
    }

});

});