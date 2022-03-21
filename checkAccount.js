function checkAccount() {
    let regex = /^[_a-z0-9]{6,}$/;
    let account =  document.getElementById('account').value;
    if(account.match(regex)) {
        document.getElementById('text').innerHTML = 'Your account in valid';
    }
    else{
        document.getElementById('text').innerHTML = 'Your account invalid'
    }
}