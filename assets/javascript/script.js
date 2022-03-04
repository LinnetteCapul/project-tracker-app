var today = moment();
$(".live-time").text(today.format("dddd, MMMM Do YYYY, h:mm:ss a"));
 
function time() {
    var today = moment();
    $(".live-time").text(today.format("dddd, MMMM Do YYYY, h:mm:ss a"));
}
setInterval(time, 1000);
