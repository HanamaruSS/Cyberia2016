$(document).ready(function() {
    var deadline = new Date(2014,10,17,0,0,0);
    var reel = $("section[name*='carousel']").children('.reel');
    for (var x = 1; x <= 7; x++) {
    reel.append(
        "<img class='image' src='images/selected_photos/" + x + ".jpg'" +
        " /></a>");
    }
    setInterval(function() {
        var now = deadline - new Date();
        var day = now / (24 * 3600 * 1000);
        now = now % (24 * 3600 * 1000);
        var hour = now / (3600 * 1000);
        now = now % (3600 * 1000);
        var minute = now / (1000 * 60);
        now = now % (60 * 1000);
        var seconds = now / 1000;
        $("#timer").html((Math.floor(day) + 
                          " days " + Math.floor(hour) + " hours " +
                          Math.floor(minute) + " minutes " +
                          Math.floor(seconds) + " seconds."));  
    }, 1000);
});

