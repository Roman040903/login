const users = JSON.parse(localStorage.getItem('users'));
const [nameInput,passwordInput] = document.querySelectorAll('input')
const loginBtn = document.getElementById('btn2')

loginBtn.addEventListener('click', () => {
  if (users[nameInput.value] == passwordInput.value) {
    location.href = 'index.html'
  } else{
    alert('Incorect password or user does not exist')
  }
})

