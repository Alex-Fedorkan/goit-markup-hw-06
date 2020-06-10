$('.comment-box__input').on('input', function () {
  var $this = $(this);
  if ($this.val() == '') {
    $this.removeClass('comment-box__input--filled');
  } else {
    $this.addClass('comment-box__input--filled');
  }
});
