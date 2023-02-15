console.log('Welcome again');
const Name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const submit = document.getElementById('submit');
let validName = false;
let validEmail = false;
let validPhone = false;


Name.addEventListener('blur',()=>{
    console.log('Name is blured');

    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = Name.value;
    console.log(regex,str);
    if(regex.test(str)){
        validName=true;
        console.log('Your name is valid');
        Name.classList.remove('is-invalid')
    }
    else{
        validName=false;
        console.log('Your name is not valid');
        Name.classList.add('is-invalid');
    }
});

email.addEventListener('blur',()=>{
    console.log('email is blured');
    
    let regex = /^([\-\._0-9a-zA-Z]+)@([\-\._0-9a-zA-Z]+)\.[a-zA-Z]{2,7}$/;
    let str = email.value;
    console.log(regex,str);
    if(regex.test(str)){
        validEmail=true;
        console.log('Your name is valid');
        email.classList.remove('is-invalid')
    }
    else{
        validEmail=false;
        console.log('Your name is not valid');
        email.classList.add('is-invalid');
    }
});

phone.addEventListener('blur',()=>{
    console.log('phone is blured');

    let regex = /^[0-9]([0-9]){9}$/;
    let str = phone.value;
    console.log(regex,str);
    if(regex.test(str)){
        validPhone=true;
        console.log('Your Phone Number is valid');
        phone.classList.remove('is-invalid')
    }
    else{
        validPhone=false;
        console.log('Your Phone Number is inValid');
        phone.classList.add('is-invalid');
    }
});

submit.addEventListener('click',(e)=>{
    
    e.preventDefault();
    console.log('You clicked on submit');
    if(validEmail && validName && validPhone){

        console.log('Phone, email and user are valid. Submitting the form');
        
        let success = document.getElementById('success');
        let failure = document.getElementById('failure');
        
        success.classList.add('show');
        $('#failure').hide();
        $('#success').show();
    }
    else{
        console.log('One of Phone, email or user are not valid. Hence not submitting the form. Please correct the errors and try again');
        
        let success = document.getElementById('success');
        let failure = document.getElementById('failure');
        
        failure.classList.add('show');
        $('#success').hide();
        $('#failure').show();
    }
})