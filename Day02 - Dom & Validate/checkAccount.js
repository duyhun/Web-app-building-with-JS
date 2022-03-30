function checkAccount() {
    let regex = /^[_a-z0-9]{6,}$/;
    let account =  document.getElementById('account').value;
    if(account.match(regex)) {
        document.getElementById('text').innerHTML = 'Your account is valid';
    }
    else{
        document.getElementById('text').innerHTML = 'Your account invalid'
    }
}

let a = '3';
let b = '6';
console.log(a + b);
