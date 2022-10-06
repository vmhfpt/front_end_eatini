$('.app-post__category-new-title').click(function(){
    $('.app-post__category-new-content').slideToggle(400);
})
$('.app-post__category-list-title').click(function(){
    $('.app-post__category-list-content').slideToggle(400);
})
$('.app-post__category-list-content-show-more').click(function(){
   var dataToggle = ( $(this).attr('data-toggle'))
   $('#' + dataToggle).slideToggle(400);
})
$("#print").change(function() {
    if(this.checked) {
        $('.app-cart__content-print-order-form').slideToggle(400);
    }else {
        $('.app-cart__content-print-order-form').slideToggle(400);
    }
});