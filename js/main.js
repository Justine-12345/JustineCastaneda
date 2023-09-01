

window.addEventListener('scroll', function () {
    const scrollDiv = document.getElementById('scrollDiv');
    if (window.scrollY > 0) {
        // scrollDiv.classList.add('bg-[#FFA53B]');
        scrollDiv.classList.add('bg-opacity-70');
        scrollDiv.classList.add('backdrop-blur-xl');
        scrollDiv.classList.add('shadow-lg');
    }

    if (window.scrollY < 1) {
        // scrollDiv.classList.remove('bg-[#FFA53B]');
        scrollDiv.classList.remove('bg-opacity-70');
        // scrollDiv.classList.remove('backdrop-blur-xl');
        scrollDiv.classList.remove('shadow-lg');
    }

    var position = $(this).scrollTop() + 50;

    $(' div[data-id="Skills"]').hide();

    $('.section').each(function () {
        var target = $(this).offset().top;
        var targetBot = target + $(this).height();
        var id = $(this).attr('id');

        $(' a[data-id=' + id + ']').removeClass('border-b-2 border-[#D4AF37] text-[#D4AF37]');

        if (position >= target && targetBot >= position) {
            $('a[data-id="' + id + '"]').addClass("border-b-2 border-[#D4AF37]  text-[#D4AF37]")


        } else {
            $(' a[data-id=' + id + ']').removeClass('border-b-2 border-[#D4AF37]');
        }

    });
});

$(document).ready(function () {

    if (window.scrollY > 0) {
        // scrollDiv.classList.add('bg-[#FFA53B]');
        scrollDiv.classList.add('bg-opacity-70');
        scrollDiv.classList.add('backdrop-blur-xl');
        scrollDiv.classList.add('shadow-lg');
    }

    var isOpenNav = false;
    var isOpenProfileNav = false
    $('#sm-nav').hide();
    $("#hamburger-nav").click(function (e) {

        if (isOpenNav == false) {
            isOpenNav = true
            $('#sm-nav').slideToggle();
            scrollDiv.classList.add('backdrop-blur-xl');
        } else {
            isOpenNav = false
            isOpenProfileNav = false
            $('#sm-nav').slideToggle(undefined, function () {
                // scrollDiv.classList.remove('backdrop-blur-xl');
            });
            $('#profile-nav').hide();

        }


    });



    $(document).ready(function () {
        $("#alert-bar").fadeIn(300, function () {
            $(this).delay(2000).fadeOut(300);
        });
    });


    $(".small-menu").click(function () {
        $('#sm-nav').slideToggle();

    });










});




