
$(document).ready(function(){
console.log("hello");
console.log("hello");


$("#buttonProva").click(function(){
    console.log("button pressed");
    var textInput = $("#inputUser").val();
    $("#outputUser").val(textInput); 
});

});