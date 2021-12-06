// Lab 2
$(function() {
    $('.sidebar ul li').hover(
        function mouseOver() {
            clearTimeout($.data(this, 'timer'));
            $(this).find('> ul').stop(true).slideDown(500);
        },
        function mouseOut() {
            var $this = $(this);
            $.data(this, 'timer', setTimeout(
                function () {
                    $this.find('> ul').stop(true).slideUp(500);
                },
                200)
            );
        });
});