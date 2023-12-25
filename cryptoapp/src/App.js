import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div id="main">
        <div id="lnav">
            <div class="nav">
                <a href="*"><i class="ri-home-5-line"></i></a>
            </div>
            <div class="nav">
                <a href="*"><i class="ri-article-line"></i></a>
            </div>
            <div class="nav">
                <a href="*"><i class="ri-settings-3-line"></i></a>
            </div>
        </div>
        <div id="right">
            <div id="rnav">
                <div class="h-nav">
                <i class="ri-arrow-left-s-line"></i>
                </div>
                <div class="h-nav">
                    <i class="ri-user-line"></i>
                </div>
            </div>
            <div id="crypto-cards">
                <div class="cards">
                   <h2>Bitcoin</h2> 
                </div>
                <div class="cards">
                    <h2>Ethereum</h2>
                    
                </div>
                <div class="cards">
                    <h2>Dogecoin</h2>
                </div>
                <div class="cards">
                    <h2>Tether</h2>
                </div>
            </div>
            <div id="analytics">
            <div id="graph">
            </div>
            <div id="piechart"></div>
        </div>
        </div>
    </div>
  );
}

export default App;
