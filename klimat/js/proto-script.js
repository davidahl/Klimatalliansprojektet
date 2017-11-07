$(document).ready(function(){
    /*
    För rapport.html
    */
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
