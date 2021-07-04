// //////////// https://api.quotable.io/random

import "./style.css";
import { useState } from "react";
import { Icon, InlineIcon } from "@iconify/react";
import bxCopyright from "@iconify/icons-bx/bx-copyright";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(false);

  const getQuote = () => {
    setLoading(true);
    fetch("https://api.quotable.io/random/")
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        console.log(res);
        console.log(res.content);
        console.log(res.author);
        setQuote(res.content);
        setAuthor(res.author);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const showQuote = () => {
    if (quote) {
      return (
        <div className='main'>
          <div className='quote'>" {quote} "</div>
          <div className='author'>~ {author}</div>
        </div>
      );
    }
  };

  return (
    <div className='outer'>
      <div className='inner'>
        <div className='header'>
          <h1>Random Quote Generator</h1>
        </div>
        <div className='btn-div'>
          <button className='btn' onClick={getQuote}>
            Get Quote
          </button>
        </div>
        {showQuote()}
      </div>
      <div className='copyright'>
        <Icon icon={bxCopyright} id='icon' />
        <a href='https://github.com/TanvNaik' target='_blank'>
          Tanvi Naik
        </a>
      </div>
    </div>
  );
}

export default App;
