const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const emailAddress = document.querySelector('#emailAddress');
const Password = document.querySelector('#Password');
const button = document.querySelector('#buttonClaim');
const group = document.querySelectorAll('.group__input');
const containerInput = document.querySelector('.inputs');
const textError = document.querySelector('.text__error');
const form = document.querySelector('form');


button.addEventListener('click',(event)=>{
    event.preventDefault();
    console.log("click");

    for(i=0; i< group.length; i++){
    group[i].classList.remove('active');
        if (group[i].firstElementChild.value == ""){
            group[i].classList.toggle('active')
    }
  }

});
