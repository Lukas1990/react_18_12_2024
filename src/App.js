import logo from './img/logo.png';
import budik_cierny from './img/budik_cierny.svg';
import budik_biely from './img/budik_biely.svg';

import ToDoApp from './components/todoapp/ToDoApp';
import Weather from './components/weather/Weather';
import lang from './lang';

import {Routes, Route, Link, NavLink} from 'react-router-dom';
import {useState, useRef} from "react"


function App() {

  const [phrase, setPhrase] = useState(lang.sk.phrase)

  function handleLangChange(evt) {
    const ver = evt.target.value
    setPhrase(lang[ver].phrase)
  }

  return (
    <>
    <header>
      <div id="header_obal">
        <div className="kontajner">
          <h1>
            <Link to="/"><img src={budik_biely} alt="budik"/> {phrase["React examples"]}</Link>
          </h1>
          <nav>
            <NavLink to="/">{phrase["To do list"]}</NavLink>
            <NavLink to="/weather">{phrase["Weather forecast"]}</NavLink>
          </nav>
          <select onChange={handleLangChange}>
            <option value="sk">SK</option>
            <option value="en">EN</option>
          </select>
        </div>
      </div>
      <div className="kontajner" id="pasik"></div>
    </header>

    <main>
      <Routes> 
        <Route path="/" element={ <ToDoApp phrase={phrase} /> } />
        <Route path="/weather" element={ <Weather phrase={phrase} /> } />
      </Routes>
    </main>

    <footer>
      <div className="kontajner">
        <p>
          <img src={budik_cierny} alt="budik"/>{phrase["The application is also available on"]} <a href="https://github.com/">github.com</a>
        </p>
        <div>
          <img src={logo} alt="logo"/>
          <p>© gov.sk copyright</p>
        </div>
      </div>
    </footer>
    </>
  );
}

export default App;
