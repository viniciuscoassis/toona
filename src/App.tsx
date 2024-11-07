import { faTelegram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faChartLine, faPaintBrush } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";

function App() {
  return (
    <>
      <div className="header">
        <img src="/logo1.png" alt="Toona Image 1" className="main-image main-image-1" />
        <p className="description">lil fish swimming in the sea...</p>

        <img src="/fam.jpeg" alt="Toona Image 2" className="main-image" />
      </div>
      {/* <h1>Welcome to Toona</h1> */}
      <button
        className="buy-button"
        onClick={() =>
          window.open(
            "https://degen.express/fantom/token/0x7F19C5adB254601178BeBcC5353A719dbc1B119A",
            "_blank"
          )
        }
      >
        Buy
      </button>
      <div className="social-buttons">
        <a
          href="https://x.com/memetoona"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="social-button">
            <FontAwesomeIcon icon={faTwitter} />
          </button>
        </a>
        <a
          href="https://t.me/toonasonic"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="social-button">
            <FontAwesomeIcon icon={faTelegram} />
          </button>
        </a>
        <a
          href="https://paintswap.finance/marketplace/fantom/collections/0x480087cf04c245bd24ffb4495010ef280cbdf1ef/nfts"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="social-button">
            <FontAwesomeIcon icon={faPaintBrush} />
          </button>
        </a>
        <a
          href="https://dexscreener.com/fantom/0x7F19C5adB254601178BeBcC5353A719dbc1B119A"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="social-button">
            <FontAwesomeIcon icon={faChartLine} />
          </button>
        </a>
      </div>
    </>
  );
}

export default App;
