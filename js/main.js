// SHOW & HIDDE NAVIGATE //

const showNavigate = document.getElementById('show-navigate'),
      modalNavigate = document.getElementById("modal-navigate"),
      cancelTrip = document.getElementById("cancel-trip")

if (showNavigate) {
  showNavigate.addEventListener('click', () => {
    modalNavigate.classList.add('show-modal')
  })
}

if (cancelTrip) {
  cancelTrip.addEventListener('click', () => {
    modalNavigate.classList.remove('show-modal')
  })
}


// SHOW & HIDDE SETTINGS //

const showSettings = document.getElementById('settings-button'),
      modalSettings = document.getElementById('modal-settings'),
      exitModal = document.getElementById('close-modal')

if (showSettings) {
  showSettings.addEventListener('click', () => {
    modalSettings.classList.add('show-settings')
  })
}


if (exitModal) {
  exitModal.addEventListener('click', () => {
    modalSettings.classList.remove('show-settings')
  })
}


// ACTIVE LINKS SIDEBAR //

let buttons = document.querySelectorAll('.sidebar__item');

buttons.forEach(button => {
  button.addEventListener('click', function () {
    buttons.forEach(btn => btn.classList.remove('is-active'));
    this.classList.add('is-active');
  })
})

// SHOW SECTIONS MENU SETTINGS //


const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
      const target = document.querySelector(tab.dataset.target)

      tabContents.forEach(tabContent => {
        tabContent.classList.remove('modal-settings__active')
      })
      target.classList.add('modal-settings__active')

      tabs.forEach(tab => {
        tab.classList.remove('modal-settings__active')
      })
      tab.classList.add('modal-settings__active')
  })
})



// SWITCH BUTTONS //


let switcher = document.getElementsByClassName('switch');

for (let i = 0; i < switcher.length; i++) {
  switcher[i].onclick = function () {
    switcher[i].classList.toggle('actived')
  }
}
