$('#show-all').on('click', function (event) {
  $('#show-all').addClass('item-active')
  $('#show-odd').removeClass('item-active')
  $('#show-even').removeClass('item-active')
  $('.odd').fadeIn(400)
  $('.even').fadeIn(400)
})

$('#show-even').on('click', function () {
  $('#show-all').removeClass('item-active')
  $('#show-odd').removeClass('item-active')
  $('#show-even').addClass('item-active')
  $('.odd').fadeOut(200)
  setTimeout(() => $('.even').fadeIn(), 200)
})

$('#show-odd').on('click', function () {
  $('#show-all').removeClass('item-active')
  $('#show-even').removeClass('item-active')
  $('#show-odd').addClass('item-active')
  $('.even').fadeOut(200)
  setTimeout(() => $('.odd').fadeIn(), 200)
})
