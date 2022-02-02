import {useEffect, useState} from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [price, setPrice] = useState(0);
  const [usd, setUsd] = useState(0);
  const onChange = (event) => setPrice(event.target.value);
  const getUsd = (event) => setUsd(event.target.value);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())  
    .then(json => {
      setCoins(json);
      setLoading(false);
    });
  }, []);
  return (
    <div>
      <h1>The Coins! ({coins.length})</h1>
      {loading ? (<strong>Loading...</strong>) 
      : (
        <div>
        <select onChange={onChange}>
          <option value={0}>Select your coin</option>
          {coins.map((coin) => (
            <option key={coin.id} value={coin.quotes.USD.price}>
              {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
        <input
          type="number"
          value={usd}
          onChange={getUsd}
        />
        <h3>You can buy {price === 0 ? 0 : usd/price}</h3>
        </div>
      )}
      
    </div>
  );
}

export default App;
