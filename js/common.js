document.body.onload = function(){
    var preloader = document.getElementById('page-preloader')

    if( !preloader.classList.contains('done') ){
        preloader.classList.add('done');
    }
}

$(document).ready(function(){
    // Sliders
    $('.banner-big').slick({
        prevArrow:"<svg fill='#000' viewBox='0 0 17 49' id='icon-slider-left'><path d='M14.5824 24.2177L0.169802 1.64078C-0.133787 1.16522 -0.0203484 0.520408 0.43077 0.190628C0.896295 -0.149684 1.53586 -0.0208369 1.84885 0.469445L17 24.2034L1.85515 48.5205C1.54761 49.0143 0.909647 49.151 0.440354 48.8163C-0.0145324 48.4918 -0.134893 47.8483 0.163502 47.3692L14.5824 24.2177Z'></path></svg>",
        nextArrow:'<svg fill="#000" viewBox="0 0 17 49" id="icon-slider-right"><path d="M14.5824 24.2177L0.169802 1.64078C-0.133787 1.16522 -0.0203484 0.520408 0.43077 0.190628C0.896295 -0.149684 1.53586 -0.0208369 1.84885 0.469445L17 24.2034L1.85515 48.5205C1.54761 49.0143 0.909647 49.151 0.440354 48.8163C-0.0145324 48.4918 -0.134893 47.8483 0.163502 47.3692L14.5824 24.2177Z"></path></svg>',
        autoplay: true   
    });

    $('.banners__wrapper').slick({
        slidesToShow: 5,
        arrows: false,
        autoplay: true,
        responsive: [{
            breakpoint: 1300,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 738,
            settings: {
                slidesToShow: 3,
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

    $('.sale-wrapper').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        slidesPerRow: 1,
        rows: 2,
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
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }]
    });

    $('.hits-wrapper').slick({
        infinite: true,
         slidesToShow: 4,
        slidesToScroll: 1,
        slidesPerRow: 1,
        rows: 2,
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
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }]
    });

    $('.new-items-wrapper').slick({
        infinite: true,
         slidesToShow: 4,
        slidesToScroll: 1,
        slidesPerRow: 1,
        rows: 2,
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
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
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

    $('.similar').slick({
        infinite: true,
        slidesToShow: 4,
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
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }]
    });

    // $('.slider-for').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: false,
    //     // autoplay: true,
    //     pauseOnHover: true,
    //     fade: true,
    //     asNavFor: '.slider-nav',
    //     responsive:
    //     [
    //         {
    //             breakpoint: 992,
    //             settings:
    //             {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1,
    //                 arrows: false,
    //             }
    //         }
    //     ]
    // });

    // $('.slider-nav').slick({
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     // autoplay: true,
    //     pauseOnHover: true,
    //     asNavFor: '.slider-for',
    //     dots: false,
    //     prevArrow:"<button type='button' class='slick-prev slick-arrow pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    //     nextArrow:"<button type='button' class='slick-next slick-arrow pull-left'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    //     arrows: true,
    //     focusOnSelect: true,
    //     centerMode: true,
    //     responsive:
    //     [
    //         {
    //             breakpoint: 1024,
    //             settings:
    //             {
    //                 slidesToShow: 4,
    //                 slidesToScroll: 1,
    //             }

    //         },

    //         {
    //             breakpoint: 992,
    //             settings:
    //             {
    //                 slidesToShow: 4,
    //                 slidesToScroll: 1,
    //                 dots: false,
    //             }

    //         },

    //         {
    //             breakpoint: 420,
    //             settings:
    //             {
    //                 slidesToShow: 4,
    //                 slidesToScroll: 1,
    //                 dots: false,
    //             }
    //         }
    //     ]
    // });

    // Subscribe form in bottom
    $('.subscribe__title').on('click', function(){
        $('.subscribe__form').slideToggle();
        $('.subscribe-close').fadeToggle();
    });

    $('.subscribe-close').on('click', function(){
        $('.subscribe').css({"display": "none"});
    });

    $(document).click(function (e) {
        if ( !$('.subscribe *').is(e.target)) {
           $('.subscribe__form').slideUp();
           $('.subscribe-close').fadeOut();
        };
    });

    // $('.slider-for, .slider-nav').on('init reInit',function(event,slick){
    //   var amount = slick.slideCount;
    //   $('#range').attr('max',amount);
    // })

    // $('.slider-for, .slider-nav').on('afterChange',function(e,slick,currentSlide){
    //   $('#range').val(currentSlide+1);
    // })

    // $('#range').on('input change',function(){
    //   $('.slider-for, .slider-nav').slick('slickGoTo',this.value-1);
    // });

    // Category toggle view
    $('.category-view__button').on('click', function(){
        $(".category-view__button").removeClass("category-view__button_state_active");
        $(this).addClass("category-view__button_state_active");

        if($('.category-view__button_list').hasClass("category-view__button_state_active")){
            $(".category__inner").addClass("category__inner_state_list");
        } else if($('.category-view__button_large').hasClass('category-view__button_state_active')){
            $(".category__inner").removeClass("category__inner_state_list");
        }
    });

    // Mobile Categories
    if( $(window).width() < 1024 ){
        $(".aside__nav-item > a, .aside__nav-sublist-item:has(ul) > a").on('click', function(e){
            e.preventDefault();
        });


        $('.aside__nav-item').on('click', function(){
            $(".aside__nav-item").not($(this)).find(".submenu").removeClass("submenu_active");
            $(this).find(".submenu").toggleClass("submenu_active");

            $("html,body").animate({
                scrollTop: $(".submenu_active").parent().offset().top
            }, 800);
        });

        $('.aside__nav-sublist2x').hide();
        $('.aside__nav-sublist-item').on('click', function(event){
            $(this).find(".aside__nav-sublist2x").slideToggle();

            event.stopPropagation();
        });
    }

    // Order call & One click buying 
    var
        orderCallBtn  = $('.order-call__btn'),
        orderCallForm = $('.order-call__form');

    orderCallBtn.on('click', function() {
        $(this).toggleClass("active");
        orderCallForm.fadeToggle();
    });

    // One click buying
    var
        oneClickForm = $('.buy-one-click__form');

    $('.buy-one-click__link').on('click', function() {
        $(this).toggleClass("active");
        oneClickForm.fadeToggle();
    });        

    $(document).click(function (e) {
        if ( !orderCallBtn.is(e.target) && !orderCallForm.is(e.target) && orderCallForm.has(e.target).length === 0 
            && !$('.buy-one-click__link').is(e.target) && !oneClickForm.is(e.target) && oneClickForm.has(e.target).length === 0) {
            orderCallForm.fadeOut(200);
            oneClickForm.fadeOut(200);
            orderCallBtn.removeClass('active');
            $('.buy-one-click__link').removeClass('active');
        };
    });

    // Mobile Categories for front page
    if($(window).width() <= 480 ){
        $('.aside__inner_one').hide();
        $('.mobile__categories_title').on('click', function(){
            $('.aside__inner_one').slideToggle();
        });
    }

    // For other pages 
    $('#aside__nav_two').hide();
    $('.desktop__categories_title').on('click', function(){
        $('#aside__nav_two').slideToggle();
    });

   // Masked input 
   $('#order-call__tel, #buy-one-click__tel').mask('+380 (99) 999-99-99');

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
    $('.cards-wrapper__item .remodal-close').on('click', function(){
        $(this).parent().remove()
    });

    // Choose shipping
    $('.pickups__suggest-select-wrap').slideUp();
    $('.pickups__drop_link').on('click', function(){
        $('.pickups__suggest-select-wrap').slideToggle(200);
    });

    $('.pickups__suggest-select-wrap-l-i a').on('click', function(){
        var pickupsListItemValue = $(this).text();
        $('.pickups__drop_link').text(pickupsListItemValue);
        $('.pickups__suggest-select-wrap').slideUp(200);
    });

    // Aside
    var aside = $('.aside'),
        asideButton = $('#asideButton');

    asideButton.on('click', function() {
        aside.toggleClass('show');
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

    $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
        $(this)
          .addClass('active').siblings().removeClass('active')
          .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
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
    $('#shipping_address, .kyev-delivery-box, .select_block_pickups').hide();

    $('#shipping_in_ukraine, #pickup').on('click', function(){
        $("#shipping_address").show(200);
        $('.kyev-delivery-box, .select_block_pickups').hide(200);
    });

    $('#shipping_novaya_pochta, #chipping_justin, #shipping_meest_express').on('click', function(){
        $('.kyev-delivery-box, #shipping_address').hide(200);
        $('.select_block_pickups').show(200);
    });
    $('#shipping_in_kiev').on('click', function(){
        $('.kyev-delivery-box').show(200);
        $('.select_block_pickups').hide(200);
    });
    $('#pickup').on('click', function(){
        $(".kyev-delivery-box").hide(200);
    });
    $('#shipping_in_kiev').on('click', function(){
        $("#shipping_address").hide(200);
    });

    // Enter promocode
    $('.enter-promocode').hide();
    $('.promocode__label').on('click', function(){
       $('.enter-promocode').show(200);
    });

    // Add favourite
    $('.products-card__wish_btn').on('click', function(){
        $(this).find('.fa-heart').toggleClass("fas wish_btn--clicked");
    });

    // Mobile phones
    $('.mobile-phone__button').on('click', function(){
        $('.mobile-phone__list').slideToggle();
    });
});

// Slideout
var slideout = new Slideout({
  
// var slideout = new Slideout({
    'panel': document.getElementById('panel'),
    'menu': document.getElementById('menu'),
    'padding': 256,
    'tolerance': 70
});

// Toggle button
document.querySelector('#burgerButton').addEventListener('click', function() {
    slideout.toggle();
});

// Desktop range
$( function() {
// Product Price
if($("div").is("#slider-range")){
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: parseInt($('#amount_to').val()) + 100,
      values: [ $('#amount_from').val(), $('#amount_to').val() ],
      slide: function( event, ui ) {
        $( "#amount_from" ).val( ui.values[ 0 ] );
        $( "#amount_to" ).val( ui.values[ 1 ] );
      }
    });
    $( "#amount_from" ).val( $( "#slider-range" ).slider( "values", 0 ) );
    $( "#amount_to" ).val( $( "#slider-range" ).slider( "values", 1 ) );

    $('input#amount_from').on('change', function(){
        var
            amountFromVal = $('#amount_from').val(),
            amountToVal   = $('#amount_to').val();

        if(parseInt(amountFromVal) > parseInt(amountToVal)){
            amountFromVal = amountToVal;
            $('input#amount_from').val(amountFromVal);
        }

        $("#slider-range").slider("values", 0, amountFromVal);
    });

    $('input#amount_to').on('change', function(){
        var
            amountFromVal = $('#amount_from').val(),
            amountToVal   = $('#amount_to').val();

        if(parseInt(amountToVal) < parseInt(amountFromVal)){
            amountToVal = amountFromVal;
            $("#amount_to").val(amountToVal);
        }

        $("#slider-range").slider("values", 1, amountToVal);
    });
}

// Volume

if($("div").is("#slider-volume")){
$( "#slider-volume" ).slider({
  range: true,
  min: 0,
  max: 200,
  values: [ 0, 50 ],
  slide: function( event, ui ) {
    $( "#volumeFrom" ).val( ui.values[ 0 ]);
    $( "#volumeTo" ).val( ui.values[ 1 ]);
  }
});

$( "#volumeFrom" ).val($( "#slider-range" ).slider( "values", 0 ));
$( "#volumeTo" ).val($( "#slider-range" ).slider( "values", 1 ) );

$('input#volumeFrom').on('change', function(){
    var
        amountFromVal = $('#volumeFrom').val(),
        amountToVal   = $('#volumeTo').val();

    if(parseInt(amountFromVal) > parseInt(amountToVal)){
        amountFromVal = amountToVal;
        $('input#volumeFrom').val(amountFromVal);
    }

    $("#slider-volume").slider("values", 0, amountFromVal);
});

$('input#volumeTo').on('change', function(){
    var
        amountFromVal = $('#volumeFrom').val(),
        amountToVal   = $('#volumeTo').val();

    if(parseInt(amountFromVal) > parseInt(amountToVal)){
        amountFromVal = amountToVal;
        $('input#volumeTo').val(amountFromVal);
    }

    if(parseInt(amountToVal) < parseInt(amountFromVal)){
        amountToVal = amountFromVal;
        $('input#volumeTo').val(amountToVal);
    }

    $("#slider-volume").slider("values", 1, amountToVal);
});
}
} );

// Mobile Range
$(function(){
    // Product Price
    if($("div").is("#slider-range")){
        $( "#slider-range_mob" ).slider({
          range: true,
          min: 0,
          max: parseInt($('#amount_to_mob').val())+100,
          values: [ $('#amount_from_mob').val(), $('#amount_to_mob').val() ],
          slide: function( event, ui ) {
            $( "#amount_from_mob" ).val( ui.values[ 0 ] );
            $( "#amount_to_mob" ).val( ui.values[ 1 ] );
          }
        });
        
        $( "#amount_from_mob" ).val( $( "#slider-range_mob" ).slider( "values", 0 ) );
        $( "#amount_to_mob" ).val( $( "#slider-range_mob" ).slider( "values", 1 ) );

        $('input#amount_from_mob').on('change', function(){
            var
                amountFromValMob = $('#amount_from_mob').val(),
                amountToValMob   = $('#amount_to_mob').val();

            if(parseInt(amountFromValMob) > parseInt(amountToValMob)){
                amountFromValMob = amountToValMob;
                $('input#amount_from_mob').val(amountFromValMob);
            }

            $("#slider-range_mob").slider("values", 0, amountFromValMob);
        });

        $('input#amount_to_mob').on('change', function(){
            var
                amountFromValMob = $('#amount_from_mob').val(),
                amountToValMob   = $('#amount_to_mob').val();

            if(parseInt(amountToValMob) < parseInt(amountFromValMob)){
                amountToValMob = amountFromValMob;
                $("#amount_to_mob").val(amountToValMob);
            }

            $("#slider-range_mob").slider("values", 1, amountToValMob);
        });
    }

    // Volume
    if( $("div").is("slider-volume_mob") ){
        $( "#slider-volume_mob" ).slider({
          range: true,
          min: 0,
          max: 200,
          values: [ 0, 50 ],
          slide: function( event, ui ) {
            $( "#volumeFrom_mob" ).val( ui.values[ 0 ]);
            $( "#volumeTo_mob" ).val( ui.values[ 1 ]);
          }
        });

        $( "#volumeFrom_mob" ).val($( "#slider-volume_mob" ).slider( "values", 0 ));
        $( "#volumeTo_mob" ).val($( "#slider-volume_mob" ).slider( "values", 1 ) );

        $('input#volumeFrom_mob').on('change', function(){
            var
                amountFromValMob = $('#volumeFrom_mob').val(),
                amountToValMob   = $('#volumeTo_mob').val();

            if(parseInt(amountFromValMob) > parseInt(amountToValMob)){
                amountFromValMob = amountToValMob;
                $('input#volumeFrom_mob').val(amountFromValMob);
            }

            $("#slider-volume_mob").slider("values", 0, amountFromValMob);
        });

        $('input#volumeTo_mob').on('change', function(){
            var
                amountFromValMob = $('#volumeFrom_mob').val(),
                amountToValMob   = $('#volumeTo_mob').val();

            if(parseInt(amountFromValMob) > parseInt(amountToValMob)){
                amountFromValMob = amountToValMob;
                $('input#volumeTo_mob').val(amountFromValMob);
            }

            if(parseInt(amountToValMob) < parseInt(amountFromValMob)){
                amountToValMob = amountFromValMob;
                $('input#volumeTo_mob').val(amountToValMob);
            }

            $("#slider-volume_mob").slider("values", 1, amountToValMob);
        });
    }
});

// Filter
$('.filter__item-heading').on('click', function(){
    $(this).parent().find(".filter__dropdown").slideToggle();
    $(this).find(".fa-angle-right").toggleClass("dropdown-open-icon")
});

// Filter mobile heading
if($(window).width() < 1024){
    window.onscroll = function() {myFunction()};

    var header = document.getElementById("category_heading");
    var sticky = header.offsetTop;

    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }
}

// Mobile filter
$('.cateogry-view__button_filter').on('click', function(){
    $('.mobile-filter').addClass("open");
    $("html, body").css({"overflow": "hidden"});

    $("#cover").css({
        "opacity": "1",
        "visibility": "visible"
    });

    $('#cover').on("click", function(){
        $(this).css({
            "opacity": "0",
            "visibility": "hidden"
        });

        $('.mobile-filter').removeClass("open");
        $("html, body").css({"overflow": "auto"});
    });
});

// Сказать Олегу пусть сделает открытие подписки один раз за сессию

$(function () {
    $(".slider").slick({
        autoplay: false,
        dots: true,
        arrows: false,
        customPaging : function(slider, i) {
            var thumb = $(slider.$slides[i]).data('thumb');
            return '<a><img src="'+thumb+'"></a>';
        },
    });

    $('.ex1').zoom({
        magnify: 1.5
    });
});