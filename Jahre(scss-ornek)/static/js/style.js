/*
    Ali Evdi
    125 Jahre
    Style JS
    04.08.2021
*/

$(document).ready(function() {
    mobileMenu();
    mapsRadioButtonAddClass();
    buttonClickPageTop();
    mapDate();

    window.onscroll = function() {
        headerScroll();
        rightFilterHideAndShow();
    };
});


function headerScroll() {

    var header = document.getElementById("header");
    var sticky = header.offsetTop;
    var rightContent = document.getElementById("rightContent");


    if (window.pageYOffset > sticky) {
        header.classList.add("scroll");
        rightContent ? rightContent.classList.add("fixedtop") : "";
    } else {
        header.classList.remove("scroll");
        rightContent ? rightContent.classList.remove("fixedtop") : "";
    }
}

function rightFilterHideAndShow() {

    var blogContent = document.getElementById("blogcontent");

    if (blogContent !== null) {
        var sticky = blogContent.clientHeight;
        var rightContent = document.getElementById("rightContent");

        var totalStick = sticky - 600;

        if (window.pageYOffset > totalStick) {
            rightContent ? rightContent.classList.add("hide") : "";
        } else {
            rightContent ? rightContent.classList.remove("hide") : "";
        }
    }


}

function buttonClickPageTop() {
    var btn = $('#top-button');

    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '300');
    });

}

function mobileMenu() {
    $('.mobile-menu').click(function(event) {
        $('.menu').toggleClass('open-nav');
        $('.mobile-menu').toggleClass('open-nav');
    });
}

function playVid() {
    var vid = document.getElementById("video-banner");
    vid.play();
    $('.play').hide();
    $('.pause').show();
}

function pauseVid() {
    var vid = document.getElementById("video-banner");
    vid.pause();
    $('.play').show();
    $('.pause').hide();
}

function mapsRadioButtonAddClass() {
    $(document).on('click', '.map_radio', function() {
        $('.map_data').removeClass('active');
        $(this).parents('.map_data').addClass('active');
    });
}


function mapDate() {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    let d = new Date();
    let min = 0;
    let max = 11;
    let dateDiv = $('.dynamic_date')

    dateDiv.text(monthNames[d.getMonth()] + " " + d.getFullYear())

    let newDate = d.getMonth();
    $(document).on('click', '.minus_date', function() {
        newDate--;
        if (newDate >= min) {
            dateDiv.text(monthNames[newDate] + " " + d.getFullYear());
        } else {
            newDate = min;
        }
    })

    $(document).on('click', '.plus_date', function() {
        newDate++;
        if (newDate <= max) {
            dateDiv.text(monthNames[newDate] + " " + d.getFullYear());
        } else {
            newDate = max;
        }
    })




}