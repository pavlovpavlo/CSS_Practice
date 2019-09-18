window.addEventListener("load",initListener,false);
 function initListener()
 {       
     var burger = document.getElementsByClassName("menu-btn");
     var i;
     var length = burger.length;
     for(i=0;i<length; i++)
        burger[i].addEventListener("click", openMenu, false);
 }
 function openMenu(event)
 {
    event.preventDefault;
    this.classList.toggle('menu-btn-active');
 }