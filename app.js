// Form blur Event listeners
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('surname').addEventListener('blur', validateSurname);
document.getElementById('post').addEventListener('blur', validatePost);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);

function validateName(){
const name = document.getElementById('name');
const re = /^[A-za-z]{2,12}$/;

if(!re.test(name.value)){
  name.classList.add('is-invalid');
} else {
  name.classList.remove('is-invalid');
}
}
function validateSurname(){
  const surname = document.getElementById('surname');
  const re = /^[A-za-z]{2,12}$/;
  
  if(!re.test(surname.value)){
    surname.classList.add('is-invalid');
  } else {
    surname.classList.remove('is-invalid');
  }
  }

function validatePost(){
const post = document.getElementById('post');
const re = /^[A-Za-z0-9]{2,4} ?[0-9][A-Za-z]{2}$/;

if(!re.test(post.value)){
  post.classList.add('is-invalid');
  console.log(post.value)
} else {
  post.classList.remove('is-invalid');
}
}

function validateEmail(){
const email = document.getElementById('email');
const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

if(!re.test(email.value)){
  email.classList.add('is-invalid');
} else {
  email.classList.remove('is-invalid');
}
}

function validatePhone(){
const phone = document.getElementById('phone');
const re = /^[0-9]{11}$/;

if(!re.test(phone.value)){
  phone.classList.add('is-invalid');
} else {
  phone.classList.remove('is-invalid');
}
}