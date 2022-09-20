const btnregister = document.getElementById('btnregister');
const btnlogin = document.getElementById('btnlogin');

const url = 'https://webaccounting.herokuapp.com/';
btnregister.onclick = e => {
    const user = {
        "firstName": fname.value.trim(),
        "lastName": lname.value.trim(),
        "login": login.value.trim(),
        "password": password.value
    }
    fetch(`${url}account/user`, {
        method: 'post',
        body: JSON.stringify(user),
        headers: {
            "Content-Type": 'application/json'
        }
    })
        .then((responce) => {
            return responce.json()
        })
        .then((data) => {
            console.log(data);
        })
        .catch((e) => {
            console.log(e);
        })
}
