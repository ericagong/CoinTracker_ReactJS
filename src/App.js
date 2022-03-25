import { useState, useEffect } from 'react'

function App() {
  const [loading, setLoading] = useState(true)
  const [coins, setCoins] = useState([])
  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        setCoins(json)
        setLoading(false)
      })
  }, [])
  const CoinList = coins.map((coin) => (
    <li>
      {coin.rank}. {coin.name}({coin.symbol}) {coin.quotes.USD.price} USD
    </li>
  ))
  return (
    <div className="App">
      <h1>Coin Tracker</h1>
      {loading ? null : <h3>We show {coins.length} coins here</h3>}
      <hr />
      {loading ? <strong>Loading...</strong> : null}
      <ul>{CoinList}</ul>
    </div>
  )
}

export default App
