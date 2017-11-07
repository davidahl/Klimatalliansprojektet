var outlets=[];
var components=["input","option","output"];
var rows=[];
$(document).ready(function(){
    $("#stattable > tr").each(function() {
        /*
        Tar fram outputboxen
        */
        var output=$(this).find('input.inputbox').eq(1);
        /*
        Hanterar avfokusering på inputboxen
        */
        $(this).find('input.inputbox').eq(0).focusout(function(event) {
            var val=parseInt($(this).val());
            if(!isNaN(val)){
                output.val(val.toFixed(2));
            }

        });
    });
});

function calculate(input, output){
    var val=parseInt($(input).val());
    val*=8.87;
    $(output).val(val.toFixed(2));
};
