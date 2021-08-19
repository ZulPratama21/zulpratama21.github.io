$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    console.log(wScroll);

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
})

      $(document).ready(function () {
        var carousel = $("#carousel").waterwheelCarousel({
          flankingItems: 3,
          movingToCenter: function ($item) {
            $('#callback-output').prepend('movingToCenter: ' + $item.attr('id') + '<br/>');
          },
          movedToCenter: function ($item) {
            $('#callback-output').prepend('movedToCenter: ' + $item.attr('id') + '<br/>');
          },
          movingFromCenter: function ($item) {
            $('#callback-output').prepend('movingFromCenter: ' + $item.attr('id') + '<br/>');
          },
          movedFromCenter: function ($item) {
            $('#callback-output').prepend('movedFromCenter: ' + $item.attr('id') + '<br/>');
          },
          clickedCenter: function ($item) {
            $('#callback-output').prepend('clickedCenter: ' + $item.attr('id') + '<br/>');
          }
        });

        $('#prev').bind('click', function () {
          carousel.prev();
          return false
        });

        $('#next').bind('click', function () {
          carousel.next();
          return false;
        });

        $('#reload').bind('click', function () {
          newOptions = eval("(" + $('#newoptions').val() + ")");
          carousel.reload(newOptions);
          return false;
        });

      });