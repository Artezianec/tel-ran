const url = 'https://webaccounting.herokuapp.com/';

btnlogin.onclick = e => {
    fetch(`${url}account/login`, {
        method: 'post',
        headers: {
            Authorization: `Basic ${btoa(login.value + ':' + password.value)}`
        }
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(response.status)
            }
        })
        .then(data => console.log(data))
        .catch(e => console.log(e.message));
}