import React from 'react';

export default function Footer() {
  return (
    <div className="footer">
      <div className='footer__container'>
        <div className='footer__logo'>
          <img
            className='footer__logo-img'
            src={process.env.PUBLIC_URL + '/images/logo.svg'}
            alt="logo"
          />
        </div>
        <div className='footer__links'>
          <a href="#github" className="footer__link uppercase">GITHUB</a>
          <a href="#contacts" className="footer__link uppercase">CONTACTS</a>
          <a href="#rights" className="footer__link uppercase">RIGHTS</a>
        </div>
        <div className="footer__goTop">
          <p className="footer__goTop-text small-text">Back to top</p>
          <img
            className="footer__goTop-icon"
            src={process.env.PUBLIC_URL + '/images/goTop-icon.svg'}
            alt="go to the top icon"
          />
        </div>
      </div>
    </div>
  );
}
