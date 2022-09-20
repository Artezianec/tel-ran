const url = 'http://data.fixer.io/api/latest';
const key = '9a312f8b6f6c48d9096cb263ab066c86';
calc.addEventListener('click', () => {
    const curFrom = from.value.trim().toUpperCase();
    const curTo = to.value.trim().toUpperCase();
    const amount = sum.value.trim();
    from.value = to.value = sum.value = '';
    fetch(`${url}?access_key=${key}`)
        .then(response => response.json())
        .then(data => data.rates)
        .then(rates => {
            const res = rates[curTo] / rates[curFrom] * amount;
            const h1 = document.createElement('h1');
            h1.appendChild(document.createTextNode(`Result = ${res}`));
            result.innerHTML = '';
            result.appendChild(h1);
        })
})