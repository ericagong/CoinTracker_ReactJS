import { useState, useEffect } from 'react'

function App() {
  const [loading, setLoading] = useState(true)
  const [coins, setCoins] = useState([])
  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then((response) => response.json())
      .then((json) => {
        setCoins(json)
        setLoading(false)
      })
  }, [])
  return (
    <div className="App">
      <h1>Coin Tracker</h1>
      {!loading ? (
        <h4>You can see {coins.length} coins information right here!</h4>
      ) : null}
      <hr />
      {loading ? <strong>Loading...</strong> : null}
      <ul>
        {coins.map((coin, index) => (
          <li key={index}>
            {coin.rank}. {coin.name} ({coin.symbol}) {coin.quotes.USD.price} USD
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
