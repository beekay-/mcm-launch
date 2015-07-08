var clock;
$(document).ready(function () {
    var clock;
    clock = $('.clock').FlipClock({
        clockFace: 'DailyCounter',
        autoStart: false,
        callbacks: {
            stop: function () {
                $('.message').html('Fasten your seat belts! It is coming.')
            }
        }
    });
    clock.setTime(1058462);
    clock.setCountdown(true);
    clock.start();
});