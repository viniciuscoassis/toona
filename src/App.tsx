import { faTelegram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faChartLine, faPaintBrush, faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";
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
      <button
        className="buy-button"
        onClick={() =>
          window.open(
            "https://app.metropolis.exchange/swap?inputCurrency=S&outputCurrency=0xf4f9c50455c698834bb645089dbaa89093b93838",
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
          href="https://dexscreener.com/sonic/0xe8299e54e6b699bcf3195f179d9a00216ea0f8ac"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="social-button">
            <FontAwesomeIcon icon={faChartLine} />
          </button>
        </a>
        <a
          href="https://theflipside.cc/#/bridge?token=Toona"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="social-button">
            <FontAwesomeIcon icon={faArrowRightArrowLeft} />
          </button>
        </a>
      </div>
    </>
  );
}

export default App;
