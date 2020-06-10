$('.field-box__input').on('input', function () {
  var $this = $(this);
  if ($this.val() == '') {
    $this.removeClass('field-box__input--filled');
  } else {
    $this.addClass('field-box__input--filled');
  }
});
