import "./App.css";

function App() {
  return (
    <div className="App">
      <p className="tittle">The react calculator !</p>
      <div className="grid">
        <div className="dis"></div>
        <div className="padButton AC reset">AC</div>
        <div className="padButton C delete">C</div>
        <div className="padButton div">/</div>
        <div className="padButton times">X</div>
        <div className="padButton seven digits">7</div>
        <div className="padButton eigth digits">8</div>
        <div className="padButton nine digits">9</div>
        <div className="padButton minus">-</div>
        <div className="padButton four digits">4</div>
        <div className="padButton five digits">5</div>
        <div className="padButton six digits">6</div>
        <div className="padButton plus">+</div>
        <div className="padButton one digits">1</div>
        <div className="padButton two digits">2</div>
        <div className="padButton three digits">3</div>
        <div className="padButton equal equal">=</div>
        <div className="padButton zero digits">0</div>
        <div className="padButton dot digits">.</div>
      </div>
    </div>
  );
}

export default App;
