//XMLHttpRequest:

// const req = new XMLHttpRequest();

// req.onload = function () {
//     console.log('ALL DONE WITH REQUEST!');
//     const data = JSON.parse(this.responseText);
//     console.log(data.ticker.price);
// }

// req.onerror = function() {
//     console.log('ERROR!');
//     console.log(this);
// }

// req.open('GET', 'https://api.cryptonator.com/api/ticker/btc-usd');
// req.send();

//Fetch API:

// fetch('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then(res => {
//     console.log('RESPONSE, WAITING TO PARSE', res)
//     return res.json()
//     })
//     .then(data => {
//     console.log('DATA PARSED...')
//     console.log(data.ticker.price)
//     })
//     .catch(e => {
//     console.log('OH NO!! ERROR!!', e)
//     })

//ASYNC version:

// const fetchBitcoinPrice = async () => {
//     try {
//         const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd');
//     const data = await res.json();
//     console.log(data.ticker.price)
//     } catch(e) {
//         console.log('SOMETHING WENT WRONG!', e)
//     }
// }

//AXIOS

// axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
// .then(res => {
//     console.log(res.data.ticker.price)
// })
// .catch(e => {
//     console.log("ERROR!!!", e)
// })

// const bitcoinPrice = async () => {
//     try {
//         const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
//         console.log(res.data.ticker.price)
//     } catch (e) {
//         console.log("ERROR!!!", e)
//     }
// }


const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');

const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    const newLI = document.createElement('LI');
    newLI.append(jokeText);
    jokes.append(newLI)
}
const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } }
        const res = await axios.get('https://icanhazdadjoke.com/', config);
        return res.data.joke;
    } catch(e) {
        return "NO JOKES AVAILABLE THIS TIME!"
    }
}

button.addEventListener('click', addNewJoke)