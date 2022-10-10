import React from "react";

export default function Info2() {
  return (
    <div className="header">
      <div className="header__img">
        <img src="./img/profile_picture.jpg" alt="Profile" />
      </div>
      <div className="header__names">
        <h2>Dev Kumar</h2>
        <span>Full Stack Developer</span>
        <a href="https://mysite.com">searchdev.io</a>
      </div>
      <div className="header__btns header__btns--2">
        <a href="/email">
          <img src="./img/email.png" alt="email logo" />
          Email
        </a>
      </div>
    </div>
  );
}
