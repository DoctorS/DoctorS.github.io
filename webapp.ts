declare const Telegram: any

window.addEventListener('DOMContentLoaded', () => {
  Telegram.WebApp.ready()

  const user = Telegram.WebApp.initDataUnsafe?.user
  const userElem = document.getElementById('user')
  const closeBtn = document.getElementById('closeBtn')

  if (user && userElem) {
    userElem.textContent = `Привет, ${user.first_name}!`
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      Telegram.WebApp.close()
    })
  }
})
