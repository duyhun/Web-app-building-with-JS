
function checkEmail() {
    let form = document.getElementById('form');
    let email = document.getElementById('email').value;
    let text = document.getElementById('text');
    let regexp = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;
    if(email.match(regexp)){
        document.getElementById('text').innerHTML = 'Your email in valid';
        text.style.color = '#black';
    }
    else{
        document.getElementById('text').innerHTML = 'Please enter valid email';
        text.style.color = '#black';
    }

}