// button mybtn
let mybutton = document.getElementById("my-btn");
window.onscroll = function (){ scrollFunction()};

function scrollFunction (){
  if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500){
    mybutton.style.display = "block";
  }
  else{
    mybutton.style.display = "none";
  }
}
function topFunction(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 200);
});

var a = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }

});

// -----loader------
var loader = document.getElementById("preloader");
window.addEventListener("load",function(){
  loader.style.display = "none";
})