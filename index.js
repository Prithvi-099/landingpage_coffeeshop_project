const wrapper =document.querySelector('.wrapper');
const login =document.querySelector('.login-link');
const signup =document.querySelector('.signup-link');

signup.addEventListener('click',()=>{
    wrapper.classList.add('active');
});

login.addEventListener('click',()=>{
    wrapper.classList.remove('active');
});