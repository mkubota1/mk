// set the date we're counting down to
var target_date = new Date("Mar 10, 2014").getTime();
 
// variables for time units
var days, hours, minutes, seconds;
 
// get tag element
 var countdown = document.getElementById("countdown");
// (above not necessary?)
 
// update the tag with id "countdown" every 1 second
setInterval(function () {
 
    // find the amount of "seconds" between now and target
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;
 
    // do some time calculations
    days = parseInt(seconds_left / 86400);
    seconds_left = seconds_left % 86400;
     
    hours = parseInt(seconds_left / 3600);
    seconds_left = seconds_left % 3600;
     
    minutes = parseInt(seconds_left / 60);
    seconds = parseInt(seconds_left % 60);
    

    function pad(num, size) {
        var s = num+"";
        while (s.length < size) s = "0" + s;
        return s;
    }


    
    // format countdown string + set tag value
    
    // (original code)
    //countdown.innerHTML = days + "d, " + hours + "h, "
    //+ minutes + "m, " + seconds + "s";  
    
    //countdown.innerHTML = days + " days," + hours + " hrs, " + minutes + " min, " + seconds + "sec";  
    
    document.getElementById("countdown").innerHTML = days + " days - " + pad(hours,2) + ":" + pad(minutes,2) + ":" + pad(seconds,2);  
 
}, 1000);