var outlets=[];
var components=["input","option","output"];
var rows=[];
$(document).ready(function(){
    $("#stattable > tr").each(function(index, el) {

    });
    /*$(".outlet").each(function(){
        outlets.push($(this).attr('name'));
    });
    for (var i in outlet) {
        $("."+outlet[i]+components[0]).addEventListener('keypress', function(e){

        });
    }*/
    /**$('#wrapper').css({
		'position' : 'absolute',
		'left' : '50%',
        'top' : '50%',
        'margin-left' : -$('#wrapper').outerWidth()/2,
        'margin-top' : -$('#wrapper').outerHeight()/2
	});**/

});

function calculate(input, output){
    var val=parseInt($(input).val());
    val*=8.87;
    $(output).val(val.toFixed(2));
};
