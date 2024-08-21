import React, { useState } from "react";
import "./App.css";


function App() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    })
      .then((res) => res.json())
      .then((data) => setResponse(data.message));
  };

  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <div className="bg">
      <div className="support">
          <a href="Contact.html"><img src="https://www.freeiconspng.com/thumbs/contact-icon-png/contact-phone-icon-4.png" alt="support" style={{width: '8vh', height: '8vh'}} /></a>
      </div>
      <div className="team">
          <a href="Team.html"><img src="https://www.freeiconspng.com/uploads/team-icon-27.png" alt="team" style={{width: '9vh', height: '9vh'}} /></a>
      </div>
        <div className="container">
          <div class="logo"></div>
          <div className="text"></div>
          <form onSubmit={handleSubmit}>
            <p>Welcome! I am Jimmy</p>
            <div class="response">{response}</div>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>

        <footer>
          <div class="bottom">
            Copyright &copy; 2023 All Rights Reserved by
            <br /> Notes'n Roll
          </div>
          <div className="logo">
            <img src="logo.png" alt="logo" style={{ width: "10vh" }} />
          </div>
          <a href="https://twitter.com/login" className="fa fa-twitter" />
          <a href="https://ro.linkedin.com/" className="fa fa-linkedin" />
          <a href="https://www.instagram.com/" className="fa fa-instagram" />
          <a href="https://mail.yahoo.com/" className="fa fa-yahoo" />
        </footer>
      </div>
    </div>
  );
}

export default App;
