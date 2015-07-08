$(document).ready(function () {
    $(".clock").countdown("2015/07/20", function (event) {
        $(this).text(event.strftime('%D days %H:%M:%S'));
    });
});
