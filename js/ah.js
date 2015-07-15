$(document).ready(function(){
    $menuItem = $(".uk-navbar-nav").find("li");
    $($menuItem).click(function(){
        $(this).removeClass();
    });
    console.log("loaded!")
});
