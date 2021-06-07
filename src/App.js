import "./App.css";
import { useState } from "react";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const getQuote = () => {
    fetch("https://quotes15.p.rapidapi.com/quotes/random/", {
      method: "GET",
      headers: {
        "x-rapidapi-key": "c174b57f5bmsh8d775e9f7915ac2p10aa85jsndd096de00416",
        "x-rapidapi-host": "quotes15.p.rapidapi.com"
      }
    })
      .then((response) => response.json())
      .then((res) => {
        wordCount(res.content);
        setQuote(res.content);
        setAuthor(res.originator.name);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  function wordCount(str) {
    if (str.split(" ").length > 30) {
      getQuote();
    }
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1> Random Quote Generator</h1>
      </header>
      <div className='main'>
        <button onClick={getQuote}>Get Quote</button>
        <b>
          <div className='quote'>
            {quote !== "" && (
              <h4>
                {quote}
                <br />- {author}
              </h4>
            )}
          </div>
        </b>
      </div>
    </div>
  );
}

export default App;
