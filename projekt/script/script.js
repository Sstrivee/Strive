document.addEventListener('DOMContentLoaded', function () {
  const loadingSpinner = document.getElementById('loading-spinner')
  const content = document.getElementById('content')

  document.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function (event) {
      loadingSpinner.style.display = 'flex'
      content.style.opacity = '0.5'
      setTimeout(function () {
        loadingSpinner.style.display = 'none'
        content.style.opacity = '1'
        window.location.href = link.href
      }, 1000)
      event.preventDefault()
    })
  })
  window.addEventListener('pageshow', function (event) {
    if (event.persisted) {
      loadingSpinner.style.display = 'none'
      content.style.opacity = '1'
    }
  })
})
