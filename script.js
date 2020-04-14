
$(document).ready(function(){

$("#buttonPrint").click(function(){
    console.log("button pressed");
    var textInput = $("#inputUser").val();
    $("#outputUser").val(textInput); 
});

});