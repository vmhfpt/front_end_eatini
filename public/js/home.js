var arrayCart = [];
function deleteCart() {
    setTimeout(function(){
            arrayCart[0]
           $('#' + arrayCart[0]).remove();
            arrayCart.shift();
         if(arrayCart[0] !== undefined){
            deleteCart ();
         }
     }, 3000);
}
$('.close-popup-cart__content-add-cart button').click(function(){
    $('.show-detail-eye-popup-success').css('display', 'none');
    var id = Math.floor(Math.random() * 9000);
    arrayCart = [...arrayCart, id];
    if(arrayCart.length == 1){
        deleteCart();
    }
    // if(arrayCart.length >= 1 ){
    //     setTimeout(function(){
    //        arrayCart[0]
    //        $('#' + arrayCart[0]).remove();
    //        arrayCart.shift();
        
    // }, 4200);
    // }
    var name = $(this).attr('data-name');
    var price = $(this).attr('data-price');
    var image = $(this).attr('data-img')
    var template = `<div id="${id}" class="list-add-cart-product__content-item">
       <div class="list-add-cart-product__content-item-title"> Đã thêm vào giỏ hàng thành công!</div>
       <div class="list-add-cart-product__content-item-close"> &times;</div>
        <div class="list-add-cart-product__content-item-detail">
            <div class="list-add-cart-product__content-item-image">
                <img src="${image}" alt=""/>
               </div>
               <div class="list-add-cart-product__content-item-content">
                  <span> ${name}</span>
                  <span>${price}</span>
            </div>
            <div class="clear-fix"></div>
        </div>
  </div>`;
   $('.list-add-cart-product__content').append(template);
})
$('.app-product-promotion__carousel-item-add, .app-suggest__product-item-add').click(function(){
     $('.show-detail-eye-popup-success').css('display', 'flex');
})
$('.show-detail-eye-popup-success').click((e) => {
if ($(e.target).children(".show-detail-eye-success-add").length === 0) {
  
}else {
$('.show-detail-eye-popup-success').css('display', 'none');
}
})
$('.icon-app-close-popup-add').click(function(){
$('.show-detail-eye-popup-success').css('display', 'none');
})
$('.close-popup-cart__image-library-item img').click(function() {
   $('.close-popup-cart__image-main').attr("src",$(this).attr('src'));
})
$('.click-toggle-address').click(function(){
    $('.app-header__right-cart-popup, .app-header__right-user-popup, .app-header__right-address-popup').fadeOut();
    $(".app-header__right-address-popup").fadeToggle(200);
    $('.over-layer').fadeIn(50);
});
$('.over-layer').click(function(){
    $(this).fadeOut(50);
    $('.app-header__right-cart-popup, .app-header__right-user-popup, .app-header__right-address-popup').fadeOut(200)
})
$('.click-toggle-user').click(function(){
    $('.app-header__right-cart-popup, .app-header__right-user-popup, .app-header__right-address-popup').fadeOut();
    $(".app-header__right-user-popup").fadeToggle(200);
    $('.over-layer').fadeIn(50);
});
$('.click-toggle-cart').click(function(){
    $('.app-header__right-cart-popup, .app-header__right-user-popup, .app-header__right-address-popup').fadeOut();
    $(".app-header__right-cart-popup").fadeToggle(200);
    $('.over-layer').fadeIn(50);
});
$(document).on('click', '.display-navbar', function() {
   $('.app-navbar').fadeIn(200);
   $('.icon-navbar').empty();
    $('.icon-navbar').append('<i class="close-navbar fa fa-close"></i>');
});
$(document).on('click', '.close-navbar', function() {
   $('.app-navbar').fadeOut(200);
   $('.icon-navbar').empty();
    $('.icon-navbar').append('<i class="display-navbar fa fa-align-left"></i>');
});


$('.show-list-child').click(function(){
    let id = $(this).attr("data-show");
    $('#' + id).fadeIn(200);    
})
$('.back-menu-mobile').click(function(){
    $('.app-navbar__content-list-child').fadeOut(200);
    return (false);
   // alert('hiddent');
})
$(document).ready(function () {
    var carousel = $(".owl-carousel");
    carousel.owlCarousel();
    $('.app-banner__right') = carousel;
    $('.app-new__content-list') = carousel;
    $('.app-vegetable-suggest__left-content') = carousel;
    $('.app-carousel-header') = carousel;
    $('.app-product-promotion__carousel') = carousel;
    $('.close-popup-cart__image-library') = carousel;
    
});
$('.close-popup-cart__image-library').owlCarousel({
    items: 5,
    margin: 2,
    autoplay: false,
    autoplayTimeout: 4000,
    loop: false,
    dots: false,
    nav:false,
    responsive: {
        0: {
            items:5,
        },
        600: {
            items: 5,
        },

        800: {
            items: 5,
        },
        1000: {
            items: 5,
        },
        1200: {
            items: 5,
        }
    }
});
$('.app-banner__right').owlCarousel({
    items: 8,
    margin: 11,
    autoplay: true,
    autoplayTimeout: 4000,
    loop: true,
    dots: false,
    nav:false,
    responsive: {
        0: {
            items:2,
        },
        600: {
            items: 2,
        },

        800: {
            items: 3,
        },
        1000: {
            items: 3,
        },
        1200: {
            items: 8,
        }
    }
});
$('.app-new__content-list').owlCarousel({
    items: 4,
    margin: 11,
    autoplay: true,
    autoplayTimeout: 4000,
    loop: true,
    dots: false,
    nav:true,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },

        800: {
            items: 3,
        },
        1000: {
            items: 3,
        },
        1200: {
            items: 4,
        }
        
    }
});
$('.app-new__content-list-suggest').owlCarousel({
    items: 3,
    margin: 11,
    autoplay: true,
    autoplayTimeout: 4000,
    loop: true,
    dots: false,
    nav:true,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },

        800: {
            items: 2,
        },
        1000: {
            items: 3,
        },
        1200: {
            items: 3,
        }
        
    }
});

$('.app-vegetable-suggest__left-content').owlCarousel({
    items: 3,
    margin: 11,
    autoplay: true,
    autoplayTimeout: 2500,
    loop: true,
    dots: false,
    nav:false,
    responsive: {
        0: {
            items: 1,
        },
        500: {
            items: 2,
        },

        800: {
            items: 2,
        },
        1000: {
            items: 2,
        },
         1200: {
            items: 3,
        }
    }
});


$('.app-product-promotion__carousel').owlCarousel({
    items: 5,
    margin: 11,
    autoplay: true,
    autoplayTimeout: 4000,
    loop: true,
    dots: false,
    nav:true,
    responsive: {
        0: {
            items: 2,
        },
        600: {
            items: 2,
        },

        800: {
            items: 2,
        },
        1000: {
            items: 5,
        }
    }
});
$('.app-carousel-header').owlCarousel({
    items: 1,
    margin: 12,
    autoplay: true,
    autoplayTimeout: 4000,
    loop: true,
    dots: true,
    nav:true,
    responsive: {
        0: {
            items: 1,

        },
        600: {
            items: 1,

        },

        800: {
            items: 1,

        },
        1000: {
            items: 1,

        }
    }
});