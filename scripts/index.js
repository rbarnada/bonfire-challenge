// Show all
$('#show-all').on('click', function () {
  $('#show-all').addClass('item-active')
  $('#show-odd').removeClass('item-active')
  $('#show-even').removeClass('item-active')
  $('.odd').fadeIn(400)
  $('.even').fadeIn(400)
})

// Show evens, hide odds
$('#show-even').on('click', function () {
  $('#show-all').removeClass('item-active')
  $('#show-odd').removeClass('item-active')
  $('#show-even').addClass('item-active')
  $('.odd').fadeOut(200)
  setTimeout(() => $('.even').fadeIn(), 200)
})

// Show odds, hide evens
$('#show-odd').on('click', function () {
  $('#show-all').removeClass('item-active')
  $('#show-even').removeClass('item-active')
  $('#show-odd').addClass('item-active')
  $('.even').fadeOut(200)
  setTimeout(() => $('.odd').fadeIn(), 200)
})
