$(document).ready(function(){
    $("#change").click(function(){
        if($("#passnew").val()===$("#passnewconf").val()){
            $("#passwchange").submit();
        });
    });
});
