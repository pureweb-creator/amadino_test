$(document).ready(function(){
    $('.sale-wrapper').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        dots: true,
        responsive: [{
            breakpoint: 1300,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 738,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 510,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

    $('.banners__wrapper').slick({
        slidesToShow: 3,
        arrows: false,
        autoplay: true,
        responsive: [{
            breakpoint: 1300,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 738,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 510,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

    $('.hits-wrapper').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        dots: true,
        responsive: [{
            breakpoint: 1300,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 738,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 510,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

    $('.new-items-wrapper').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        dots: true,
        responsive: [{
            breakpoint: 1300,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 738,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 510,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

    $('.offer-wrapper').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        dots: true,
        responsive: [{
            breakpoint: 1300,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 738,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }]
    });

    if ($(window).width() < 420) {
        $('.new-items-wrapper').slick('unslick');
        $('.new-items-wrapper').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false
        });
    }

    // Registration
    var regButton = $('#signUpButton');
    var regButton2 = $('#regButton2');
    var exitButton = $('#exitButton');
    var modal = $('#registrationModal');
    var buyersButton = $('#buyersButton');
    var partnersButton = $('#partnersButton');
    var buyers = $('#buyers');
    var partners = $('#partners');
    var buttonsScreen = $('#modalFirst');
    
    exitButton.on('click', function() {
        modal.removeClass('show');
        buttonsScreen.removeClass('hide');
        if (buyers.hasClass('show')) {
            buyers.removeClass('show');
        }
        if (partners.hasClass('show')) {
            partners.removeClass('show');
        }
        openBody();
    });

    regButton.on('click', function(e) {
        e.preventDefault();
        window.scrollTo(0, 0);
        modal.addClass('show');
        disableBody();
    });

    regButton2.on('click', function(e) {
        e.preventDefault();
        window.scrollTo(0, 0);
        modal.addClass('show');
        disableBody();
        mobileMenu.removeClass('show');
    });

    buyersButton.on('click', function() {
        buttonsScreen.addClass('hide');
        buyers.addClass('show');
    });

    partnersButton.on('click', function() {
        buttonsScreen.addClass('hide');
        partners.addClass('show');
    });

    // Mobile menu
    var burgerButton = $('#burgerButton'),
        mobileMenu = $('#mobileMenu'),
        black = $('.header__menu-black');

    burgerButton.on('click', function() {
        mobileMenu.toggleClass('show');
        disableBody();
    });

    black.on('click', function() {
        mobileMenu.removeClass('show');
        filterMob.removeClass('show');
        openBody();
    });

    function disableBody() {
        document.body.style.overflow = 'hidden';
    }

    function openBody() {
        document.body.style.overflowX = 'hidden';
        document.body.style.overflowY = 'visible';
    }

    // Aside
    var aside = $('.aside'),
        asideButton = $('#asideButton');

    asideButton.on('click', function() {
        aside.toggleClass('show');
    });

    // Filter
    var filterButton = $('#filterButton');
    var filterMob = $('#filterMob');
    var filterTab = $('.filter-mob__tab');
    var filterTabTitle = $('.filter-tab__title');

    filterButton.on('click', function() {
        filterMob.toggleClass('show');
        disableBody();
    });

    filterTabTitle.on('click', function() {
        filterTab.removeClass('show');
        this.parentNode.classList.add('show');
        console.log();
    });

    // b2b header
    var cashOut = $('#cashOut');
    var cashOutButton = $('#cashOut a');
    cashOutButton.on('click', function(e) {
        e.preventDefault();
        cashOut.toggleClass('show');
    });

    var valueDown = $('.valueDown'),
        valueUp = $('.valueUp');

    for (var k = 0; k < valueUp.length; k++) {
        valueUp[k].addEventListener('click', function() {
            this.parentNode.querySelector('input[type=number]').stepUp();
        });
    }

    for (var n = 0; n < valueDown.length; n++) {
        valueDown[n].addEventListener('click', function() {
            this.parentNode.querySelector('input[type=number]').stepDown();
        });
    }

    // Copylink
    var copyBtn1 = $('#copyBtn1');
    var copyInput1 = $('#copyInput1');
    var copyBtn2 = $('#copyBtn2');
    var copyInput2 = $('#copyInput2');

    function copyLink(button, input) {
        button.on('click', function(e) {
            e.preventDefault();
            input.select();

            document.execCommand("copy");
        });
    }
    copyLink(copyBtn1, copyInput1);
    copyLink(copyBtn2, copyInput2);

    // === Show pass
    var showPass = $('#showPass');
    var passes = $('.settings__pass');

    function viewPassword(button, input) {
        button.on('click', function(e) {
            e.preventDefault();
            if (input.attr("type") === "password") {
                input.attr("type", "text");
            } else {
                input.attr("type", "password");
            }
        });
    }

    viewPassword(showPass, passes);

    // b2b menu
    var b2bMenu = $('#b2bMenu'),
        b2bMenuButton = $('#b2bMenuButton');

    b2bMenuButton.on('click', function() {
        b2bMenu.toggleClass('show');
        
        if (b2bMenu.hasClass('show')) {
            disableBody();
        } else {
            openBody();
        }
    });


    var reviewsNumber = document.querySelector('#reviewsNumber');
    var reviewItem = document.querySelectorAll('.reviews__item');
    if (reviewItem.length > 0) {
        reviewsNumber.innerHTML = reviewItem.length;
    }

    $('.product-tabs__header').on('click', '.product-tabs__tab-button:not(.active)', function() {
        $(this)
          .addClass('active').siblings().removeClass('active')
          .closest('div.product-tabs').find('div.product-tabs__tab-content').removeClass('active').eq($(this).index()).addClass('active');
      });

    // $('.product-tabs__tab-button').on('click', function(e) {
    //     e.preventDefault();
    //     var target = e.target.href.split('#')[1];

    //     $([document.documentElement, document.body]).animate({
    //         scrollTop: $("#" + target).offset().top - 200
    //     }, 1000);
    // });
    // product tabs


    
    // var productTabs = document.querySelectorAll('.product-tabs__tab-content');
    // var productButtons = document.querySelectorAll('.product-tabs__tab-button');
    
    // productButtons.forEach(function(item, k) {
    //     productButtons[k].addEventListener('click', function() {
    //         showTab(k);
    //         darkenAllButtons();
    //         productButtons[k].classList.add('active');
    //     });
    // });

    // function showTab(x) {
    //     hideAllTabs();
    //     productTabs[x].classList.remove('hide');
    //     productTabs[x].classList.add('show');
    // }

    // function darkenAllButtons() {
    //     for (var i = 0; i < productButtons.length; i++) {
    //         productButtons[i].classList.remove('active');
    //     }
    // }

    // function hideAllTabs() {
    //     for (var i = 0; i < productTabs.length; i++) {
    //         productTabs[i].classList.remove('show');
    //         productTabs[i].classList.add('hide');
    //     }
    // }

    // function hideTabs(a) {
    //     for (var i = a; i < productTabs.length; i++) {
    //         productTabs[i].classList.remove('show');
    //         productTabs[i].classList.add('hide');
    //     }
    // }
    // hideTabs(1);

    // Product image
    $('.goods-img__item').on('click', function(e) {
        e.preventDefault();
        var target = $(e.target);
        if (target.is('IMG')) {
            $('.goods-img__item').removeClass('active');
            target.parent().addClass('active');
            var copy = target.clone();
            $('.good-img__current').empty().append(copy);
        }        
    });

    // Leave comment
    $('#callLeaveReview').on('click', function(e) {
        e.preventDefault();
        $('#commentModal').addClass('show');
        disableBody();
    });
    $('#exitCommentButton').on('click', function() {
        $('#commentModal').removeClass('show');
        openBody();
    });

    // Navigation
    function hideExtraCategories() {
        for (var k = 6; k < 40; k++) {
            $('.aside__nav-siblist2x-item:nth-child(' + k + ')').hide();
        }
    }  
    hideExtraCategories();
    $('.aside__nab-siblist2x-more a').on('click', function(e) {
        e.preventDefault();
        var target = $(e.target);
        target.parent().parent().find('.aside__nav-siblist2x-item').toggleClass('show');        
    });

    // Shipping
    $('#shipping_address').hide();
    $('#shipping_in_kiev, #shipping_in_ukraine').on('click', function(){
        $("#shipping_address").show(200);
    });
    $('#pickup').on('click', function(){
        $("#shipping_address").hide(200);
    });

});