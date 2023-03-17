const [usernameInput, passwordInput] = document.querySelectorAll('input')
const btn = document.querySelector('button')

const users = JSON.parse(localStorage.getItem('users')) || {
  Bob: '123',
  Ter: '321',

}
btn.addEventListener('click', () => {
  if (usernameInput.value in users) {
    alert('username is occupied')
  } else {
    users[usernameInput.value] = passwordInput.value
    alert('you are successfully registered')
    const s = JSON.stringify(users);
    localStorage.setItem('users', s);
  }
})

