$(document).ready(function(){
    $menuItem = $(".uk-navbar-nav").find("li");
    $($menuItem).click(function(){
        $($menuItem).removeClass();
        $(this).addClass("uk-active");
    });
    console.log("loaded!")
});
