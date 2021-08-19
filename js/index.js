$(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    if(wScroll >= 400){
        $("#myNav").addClass('bg-nav');
        $(".navbar").addClass('mNav');
    } else {
        $("#myNav").removeClass('bg-nav');
        $(".navbar").removeClass('mNav');
    }

    if(wScroll >= 683){
        $(".home").addClass('active');
        $(".about").removeClass('active');
    } if ( wScroll > $('#about').offset().top - 100 ) {
        $(".home").removeClass('active');
        $(".about").addClass('active');
        $(".academy").removeClass('active');
    } if ( wScroll > $('#academy').offset().top - 130 ) {
        $(".about").removeClass('active');
        $(".academy").addClass('active');
        $(".experience").removeClass('active');
    } if ( wScroll > $('#experience').offset().top - 130 ) {
        $(".academy").removeClass('active');
        $(".experience").addClass('active');
        $(".skills").removeClass('active');
    } if ( wScroll > $('#skills-title').offset().top - 130 ) {
        $(".experience").removeClass('active');
        $(".skills").addClass('active');
        $(".contact").removeClass('active');
    } if ( wScroll > $('#contact').offset().top - 150 ) {
        $(".skills").removeClass('active');
        $(".contact").addClass('active');
    }
});

const scriptURL = 'https://script.google.com/macros/s/AKfycbztKy2s0hFNsBO-pw828k_553DllAxyECkPeuhjNfIT075lnurZiYLoamEo-O9qwyDm/exec'
const form = document.forms['JP-contact-form']

const btnKirim = document.querySelector('.btn-kirim')
const btnLoading = document.querySelector('.btn-loading')
const alert = document.querySelector('.alert')

form.addEventListener('submit', e => {
e.preventDefault()
btnLoading.classList.toggle('d-none');
btnKirim.classList.toggle('d-none');
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => {
    btnLoading.classList.toggle('d-none');
    btnKirim.classList.toggle('d-none');
    alert.classList.toggle('d-none');
    form.reset();
    console.log('Success!', response);
  })
  .catch(error => console.error('Error!', error.message))
});

function moveToSelected(element) {

  if (element == "next") {
    var selected = $(".selected").next();
  } else if (element == "prev") {
    var selected = $(".selected").prev();
  } else {
    var selected = element;
  }

  var next = $(selected).next();
  var prev = $(selected).prev();
  var prevSecond = $(prev).prev();
  var nextSecond = $(next).next();

  $(selected).removeClass().addClass("selected");

  $(prev).removeClass().addClass("prev");
  $(next).removeClass().addClass("next");

  $(nextSecond).removeClass().addClass("nextRightSecond");
  $(prevSecond).removeClass().addClass("prevLeftSecond");

  $(nextSecond).nextAll().removeClass().addClass('hideRight');
  $(prevSecond).prevAll().removeClass().addClass('hideLeft');

}

// Eventos teclado
$(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
        moveToSelected('prev');
        break;

        case 39: // right
        moveToSelected('next');
        break;

        default: return;
    }
    e.preventDefault();
});

$('#carousel div').click(function() {
  moveToSelected($(this));
});

$('#prev').click(function() {
  moveToSelected('prev');
});

$('#next').click(function() {
  moveToSelected('next');
});