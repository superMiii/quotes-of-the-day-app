import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    getQuotes();
  }, []);

  const getQuotes = async () => {
    const req = await fetch(`https://type.fit/api/quotes`);
    const res = await req.json();
    const number = Math.floor(Math.random() * 1644);
    setQuotes(res[number]);
  };

  return (
    <div className="App">
      <div
        className="card bg-pink text-white-500 text-center p-3"
        style={{
          backgroundImage:
            "url(https://demo.interface.club/limitless/demo/Template/global_assets/images/backgrounds/panel_bg.png)",
          backgroundSize: "contain"
        }}
      >
        <div>
          <a
            href="#"
            className="btn btn-outline-white btn-lg btn-icon border-2 rounded-pill mb-3 mt-1"
          >
            <i className="fa fa-quote-right"></i>
          </a>
        </div>

        <blockquote className="blockquote mb-0">
          <p>{quotes.text}</p>
          <footer className="blockquote-footer text-white">
            <span>{quotes.author}</span>
          </footer>
        </blockquote>
      </div>
    </div>
  );
}
