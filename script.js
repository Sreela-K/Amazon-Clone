const imgs =document.querySelectorAll(".header-slider ul img");
const Next = document.querySelector(".ctr-next");
const Prev = document.querySelector(".ctr-prev");

var n=0;

function change_slider(){
  for (var i =0; i< imgs.length; i++){
    imgs[i].style.display="none";
  }
  imgs[n].style.display="block";
}

change_slider();

Prev.addEventListener("click", function(e) {
  if (n > 0) {
    n--;
  } else {
    n = imgs.length - 1;
  }
  change_slider();
});

Next.addEventListener("click", function(e){
  if (n<imgs.length-1){
    n++;  
  }else{
    n=0;
  }
  change_slider();
})
