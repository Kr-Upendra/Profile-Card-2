import React from "react";

export default function Info() {
  return (
    <div className="header">
      <div className="header__img">
        <img src="./img/profile_picture.jpg" alt="Profile" />
      </div>
      <div className="header__names">
        <h2>Laura Smith</h2>
        <span>Frontend Developer</span>
        <a href="https://mysite.com">laurasmith.website</a>
      </div>
      <div className="header__btns">
        <a href="/email">
          <img src="./img/email.png" alt="email logo" />
          Email
        </a>
      </div>
      <div className="header__btns">
        <a href="/linkedin">
          <img src="./img/linkedin.png" alt="linkedin" />
          Linkedin
        </a>
      </div>
    </div>
  );
}
