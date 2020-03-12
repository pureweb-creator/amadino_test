$(document).ready(function(){
    $('.sale-wrapper').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        responsive: [{
            breakpoint: 1300,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 738,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
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
        slidesToShow: 5,
        arrows: false,
        autoplay: true,
        responsive: [{
            breakpoint: 1300,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 738,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
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
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        responsive: [{
            breakpoint: 1300,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 738,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
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
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        responsive: [{
            breakpoint: 1300,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 738,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
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
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        responsive: [{
            breakpoint: 1300,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 738,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 738,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
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

    // Mobile menu
    $('#burgerButton').on('click', function(){
        $("#mobileMenu").css({
            'visibility': 'visible',
            'opacity': '1'
        });
    });  

    $(".header__menu-black").click(function () {
        $("#mobileMenu").css({
            'visibility': 'hidden',
            'opacity': '0'
        });
    });

    // Order call
   var
        orderCallBtn     = $('.order-call__btn'),
        orderCallForm    = $('.order-call__form');

    orderCallForm.hide(200);
    orderCallBtn.on('click', function() {
        if ( $(this).hasClass('active') ) {
            $(this).removeClass('active');
            orderCallForm.hide(200);
        } else {
            $(this).addClass('active');
            orderCallForm.show(200);
        }
    });

    $(document).click(function (e) {
        if ( !orderCallBtn.is(e.target) && !orderCallForm.is(e.target) && orderCallForm.has(e.target).length === 0) {
            orderCallForm.hide(200);
            orderCallBtn.removeClass('active');
        };
    });


   // Masked input 
   $('#order-call__tel').mask('+380(99) 999-99-99');

    // Star rating
    var cStars = function(nowPos) {
    $('.stars .star').removeClass('active'); // У всех убираем active
      
    for (var i = 0; nowPos + 1 > i; i++) {
        $('.stars .star').eq(i).toggleClass('active');
      }
    }

    var starsCount = $('.star.active').length; // переменная содержит количество активных звезд

    $('.stars .star').hover(function() {
      cStars($(this).index());
    });

    $('.stars .star').click(function() {
      cStars($(this).index());
      starsCount = $('.star.active').length; // меняем количество по клику
    });

    $('.stars .star').on('mouseleave', function() { // Как только отводим мышку, возвращаем количество активных айтемов, которые были изначально
      cStars(+starsCount - 1);
    });

    // Remove items from cart
    $('.bought-table__item-delete a').on('click', function(){
        $(this).parent().parent().remove()
    });
    $('.remodal-close').on('click', function(){
        $(this).parent().parent().remove()
    });

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

    $('.product-tabs__header').on('click', '.product-tabs__tab-button:not(.active)', function() {
        $(this)
          .addClass('active').siblings().removeClass('active')
          .closest('div.product-tabs').find('div.product-tabs__tab-content').removeClass('active').eq($(this).index()).addClass('active');
      });
    

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
    $('#shipping_address, .kyev-delivery-box').hide();

    $('#shipping_in_ukraine, #shipping_courier').on('click', function(){
        $("#shipping_address").show(200);
        $('.kyev-delivery-box').hide(200);
    });
    $('#shipping_in_kiev').on('click', function(){
        $('.kyev-delivery-box').show(200);
    });
    $('#pickup').on('click', function(){
        $(".kyev-delivery-box, #shipping_address").hide(200);
    });
    $('#pickup, #shipping_in_kiev').on('click', function(){
        $("#shipping_address").hide(200);
    });

    // Enter promocode
    $('.enter-promocode').hide();
    $('.promocode__label').on('click', function(){
       $('.enter-promocode').show(200);
    });
});