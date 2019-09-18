window.addEventListener("load",initListener,false);
 function initListener()
 {       
     var cards = document.getElementsByClassName('card');
     for (i=0;i< cards.length;i++) cards[i].addEventListener("click",rotateContainer,false);
 }
 function rotateContainer()
 {
 	var container = document.getElementsByClassName('container')[0];
 	container.classList.toggle('container-origin');
 }