var lastScrollTop = 0;
navbar = document.getElementById("navbar");
window.addEventListener("scroll", function(){
    var scrollTop = window.pageYOffset || doucment.documentElement.scrollTop;

    if(scrollTop > lastScrollTop){
        navbar.style.top = "-17vh";
        
    }
    else{
        console.log("masuk");
        navbar.style.top= "0";
    }
    lastScrollTop = scrollTop;
})