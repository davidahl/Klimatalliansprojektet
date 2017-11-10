$(document).ready(function(){
    $("newpass").focusout(function() {
        
    });
    var newpassunfocus=$("#newpass").focusout();
    $("#newpassconf").focusout(function() {
        if($(this).val()!=$("#newpass").val() && newpassunfocus && $("#newpass").val()!=""){
            $("#nomatch").show();
        }
    });
});
