
var today = moment();
$('.live-time').text(today.format("dddd, MMM Do YYYY, h:mm:ss a"));

function updateTime() {
    var today = moment();
    $('.live-time').text(today.format("dddd, MMM Do YYYY, h:mm:ss a"));
}

setInterval(updateTime, 1000);

