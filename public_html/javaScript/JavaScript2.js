//Overide elements of UL to fill with local stoage key pairs
$(document).ready(function(){  
    $("#listDate").html(localStorage.getItem("date"));
    $("#listTime").html(localStorage.getItem("time"));
    $("#listOhip").html(localStorage.getItem("ohip"));
    $("#listEmailAddress").html(localStorage.getItem("email"));
    $("#listPNumber").html(localStorage.getItem("pNumber"));
});


