let bitcoinPrice = document.querySelector(".bitcoinPrice")
let dogecoinPrice= document.querySelector(".dogecoinPrice")
let ethereumPrice = document.querySelector(".ethereumPrice")



async function show() {
    try {
        result = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd')
        data = await result.json()
        bitcoinPrice.innerHTML = `${data.bitcoin.usd} $`
        dogecoinPrice.innerHTML = `${data.dogecoin.usd} $`
        ethereumPrice.innerHTML = `${data.ethereum.usd} $`
    }

    catch {
     alert('error in your API')
    }
}

show()