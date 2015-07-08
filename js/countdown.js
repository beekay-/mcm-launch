$(document).ready(function () {
    var date = new Date(2015, 6, 20);
    var now = new Date();
    var diff = (date.getTime() / 1000) - (now.getTime() / 1000);
    var clock = $('.clock').FlipClock(diff, {
        clockFace: 'DailyCounter',
        countdown: true
    });
});
