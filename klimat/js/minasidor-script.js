$(document).ready(function(){
    $("#change").submit(function(){

    });
});

function validateForm() {
    var newpass = document.forms["passwchange"]["newpass"].value;
    var newPassconf = document.forms["passwchange"]["newpassconf"].value;
    if(newpass != "" && newpassconf != ""){
        if (newpass != newPassconf) {
            document.getElementById("nomatch").innerHTML = "Passwords don't match";
            return false;
        }else{
            alert("Password changed");
        }
    }
    var num=6;
    document.getElementById("nomatch").innerHTML = "Password must be longer than " + num + " characters.";
    return false
};
