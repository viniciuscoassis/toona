import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faTelegram, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faChartLine, faPaintBrush } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <>
      <div className="header">
        <img src="/logo.png" alt="Toona Image 1" className="main-image" style={{ width: '50%'}} />
        <img src="/fam.jpeg" alt="Toona Image 2" className="main-image" style={{ width: '50%' }} />
      </div>
      {/* <h1>Welcome to Toona</h1> */}
      <button className="buy-button ">Buy</button>
      <div className="social-buttons">
        <a href="https://twitter.com/toona" target="_blank" rel="noopener noreferrer">
          <button className="social-button">
            <FontAwesomeIcon icon={faTwitter} />
          </button>
        </a>
        <a href="https://telegram.org/toona" target="_blank" rel="noopener noreferrer">
          <button className="social-button">
            <FontAwesomeIcon icon={faTelegram} />
          </button>
        </a>
        <a href="https://paintswap.finance/marketplace/fantom/collections/0x480087cf04c245bd24ffb4495010ef280cbdf1ef/nfts" target="_blank" rel="noopener noreferrer">
          <button className="social-button">
            <FontAwesomeIcon icon={faPaintBrush} />
          </button>
        </a>
        <a href="https://dexscreener.com/toona" target="_blank" rel="noopener noreferrer">
          <button className="social-button">
            <FontAwesomeIcon icon={faChartLine} />
          </button>
        </a>
      </div>
    </>
  );
}

export default App;
