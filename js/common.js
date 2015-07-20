$(document).ready(function () {
    $("#nav-mobile").html($("#nav-main").html());
    $("#nav-trigger span").click(function () {
        if ($("nav#nav-mobile ul").hasClass("expanded")) {
            $("nav#nav-mobile ul").removeClass("expanded").slideUp(200);
        } else if ($("nav#nav-mobile ul").hasClass("expanded")) {
            $("nav#nav-mobile ul").removeClass("expanded").slideUp(200);
        } else {
            $("nav#nav-mobile ul").addClass("expanded").slideDown(200);
            $("nav#nav-mobile a").click(function () {
                $("#nav-mobile ul").hide();
            });
        }
    });
    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//,
                '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 20
                }, 1000);
                return false;
            }
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
        ga('send','event','Back to Top','Clicks');
    });
});
