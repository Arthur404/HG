//=======================  tabs  =======================
$(".tab_item").not(":first").hide();
$(".inf-tab .tab").click(function() {
    $(".inf-tab .tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");