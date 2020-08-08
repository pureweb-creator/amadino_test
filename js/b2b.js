$(document).ready(function () {
  $('.b2b-header__icon--notifications').on('mouseover', function() {
    $(this).addClass('fa-bell-on')
  });

  $('.b2b-header__icon--notifications').on('mouseleave', function() {
    $(this).removeClass('fa-bell-on')
  });

  // b2b header
  var cashOut = $('#cashOut');
  var cashOutButton = $('#cashOut a');

  var valueDown = $('.valueDown'),
      valueUp = $('.valueUp');

  for (var k = 0; k < valueUp.length; k++) {
      valueUp[k].addEventListener('click', function() {
          this.parentNode.querySelector('input[type=number]').stepUp();
      });
  }

  for (var n = 0; n < valueDown.length; n++) {
      valueDown[n].addEventListener('click', function() {
          this.parentNode.querySelector('input[type=number]').stepDown();
      });
  }

  $('.close').on('click', function() {
    $('.b2b-settings__alert').remove()
  });
});
