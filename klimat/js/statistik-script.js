$(document).ready(function(){
    var labels=[];
    $("#content > form").each(function() {
        $(this).children('input').each(function() {
        });
    });
    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
    		data: {
            labels: ["Axis", "Volvo", "tuna", "Georg", "Denada"],
            datasets: [{
    						label:"Bensin",
                data: [727, 589, 537, 543, 574],
                backgroundColor: "rgba(63,103,126,1)",
                hoverBackgroundColor: "rgba(50,90,100,1)"
            },{
    						label:"Bla",
                data: [238, 553, 746, 884, 903],
                backgroundColor: "rgba(163,103,126,1)",
                hoverBackgroundColor: "rgba(140,85,100,1)"
            },{

    						label:"Flyg",
                data: [1238, 553, 746, 884, 903],
                backgroundColor: "rgba(63,203,226,1)",
                hoverBackgroundColor: "rgba(46,185,235,1)"
            }]
        },
        options: {
    			responsive:true,
            scales: {
    			xAxes: [{
    				barThickness:50,
    				stacked:true
    			}],
                yAxes: [{
    							stacked:true
                }]
            }
        }
    });

});
