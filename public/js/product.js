$('.app-product__filter-category-title').click(function(){
    $(".app-product__filter-category-content").slideToggle(400);

})
$('.app-product__filter-price-title').click(function(){
    $(".app-product__filter-price-content").slideToggle(400);
    
})
$('.app-product__filter-supplier-title').click(function(){
    $(".app-product__filter-supplier-content").slideToggle(400);
    
});
$('.tab-close__filter-right>i').click(function() {
    $('.app-product__content-filter-right').slideToggle(50);
    $('.app-product__filter').slideToggle(400);
})
$('.app-product__content-filter-icon-mobile-detail').click(function() {
    $('.app-product__content-filter-right').slideToggle(300);
    $('.app-product__filter').slideToggle(400);
})
